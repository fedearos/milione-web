import type { Metadata, Viewport } from 'next'
import './globals.css'

const markIcon = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icono-iccTwYD08xRnLdqCUOFFRr3y6dkUe0.png'

export const metadata: Metadata = {
  title: 'Milione | Próximamente',
  description: 'Estamos preparando nuestra nueva vidriera digital. Chacinados Milione, producto artesanal de origen en Chacabuco.',
  generator: 'Next.js',
  icons: {
    icon: markIcon,
    shortcut: markIcon,
    apple: markIcon,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#170909',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
