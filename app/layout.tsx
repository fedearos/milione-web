import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { MessageCircle } from 'lucide-react'
import Navbar from '@/components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

// Apuntamos a la imagen local
const markIcon = '/images/icono.png'

export const metadata: Metadata = {
  title: 'Chacinados Milione | Producto artesanal de origen',
  description: 'Fábrica artesanal de chacinados en Chacabuco. Descubrí nuestra historia y catálogo de productos.',
  icons: { icon: markIcon, shortcut: markIcon, apple: markIcon },
}

export const viewport: Viewport = {
  themeColor: '#170909',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-(--wine-dark) text-(--cream) antialiased min-h-screen flex flex-col`}>
        <Navbar />
        
        <main className="grow">
          {children}
        </main>

        <a 
          className="whatsapp-float" 
          href="https://wa.me/5492352469120?text=Hola%2C%20Vengo%20de%20la%20web%20y%20quiero%20hacer%20una%20consulta" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Consultar por WhatsApp"
        >
          <MessageCircle aria-hidden="true" />
          <span>Consultas<br />y pedidos</span>
        </a>
      </body>
    </html>
  )
}