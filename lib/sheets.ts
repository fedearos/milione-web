import { google } from 'googleapis'
import { unstable_cache } from 'next/cache'
import { catalogData, Product } from '@/data/catalog'

export interface ContentImage {
  id: string
  section: string
  title: string
  url: string
  order: number
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID

// Inicializa el cliente autenticado de Google Sheets
function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!SPREADSHEET_ID || !clientEmail || !privateKey) {
    return null
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })

  return google.sheets({ version: 'v4', auth })
}

// 1. Obtener lista de productos con ISR (Revalida cada 3600 segundos)
export const getProductsFromSheets = unstable_cache(
  async (): Promise<Product[]> => {
    try {
      const sheets = getSheetsClient()
      if (!sheets || !SPREADSHEET_ID) {
        console.warn('[Sheets] Usando mock local de productos (falta configuración de env).')
        return catalogData
      }

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'listaProductos!A2:E',
      })

      const rows = response.data.values
      if (!rows || rows.length === 0) return catalogData

      // Filtra por columna 'disponible' === 'SI'
      return rows
        .filter((row) => (row[4] || '').toUpperCase().trim() === 'SI')
        .map((row, idx) => ({
          id: String(idx + 1),
          name: row[0] || '',
          category: (row[1] as any) || 'Chacinados',
          description: row[2] || '',
          imagePlaceholder: row[3] || undefined,
        }))
    } catch (error) {
      console.error('[Sheets] Error recuperando productos:', error)
      return catalogData
    }
  },
  ['sheets-products-list'],
  { revalidate: 3600 }
)

// 2. Obtener imágenes por sección (fotosContenido) con ISR
export const getContentImagesBySection = unstable_cache(
  async (sectionName: string): Promise<ContentImage[]> => {
    try {
      const sheets = getSheetsClient()
      if (!sheets || !SPREADSHEET_ID) {
        return []
      }

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'fotosContenido!A2:E',
      })

      const rows = response.data.values
      if (!rows || rows.length === 0) return []

      return rows
        .map((row) => ({
          id: row[0] || '',
          section: row[1] || '',
          title: row[2] || '',
          url: row[3] || '',
          order: Number(row[4]) || 0,
        }))
        .filter((item) => item.section === sectionName)
        .sort((a, b) => a.order - b.order)
    } catch (error) {
      console.error(`[Sheets] Error recuperando fotos para sección "${sectionName}":`, error)
      return []
    }
  },
  ['sheets-content-images'],
  { revalidate: 3600 }
)