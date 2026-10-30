'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const logo = '/images/logo.png'
const mark = '/images/icono.png'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Si estamos en la vista de próximamente, no mostramos la barra de navegación
  if (pathname === '/proximamente') {
    return null
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-(--wine-dark)/95 backdrop-blur-md border-b border-(--gold)/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Marca: Logo en blanco + Chanchito en rojo original */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img 
            src={logo} 
            alt="Milione Chacinados" 
            className="h-8 sm:h-9 w-auto brightness-0 invert" 
          />
          <img 
            src={mark} 
            alt="" 
            className="h-7 sm:h-8 w-auto object-contain" 
            aria-hidden="true" 
          />
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-8 text-(--cream) text-xs uppercase tracking-[0.2em] font-semibold">
          <Link href="#nosotros" className="hover:text-(--gold) transition-colors">Historia</Link>
          <Link href="#catalogo" className="hover:text-(--gold) transition-colors">Catálogo</Link>
          <Link href="#contacto" className="hover:text-(--gold) transition-colors">Contacto</Link>
        </nav>

        {/* Botón Menú Hamburguesa (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-(--cream) hover:text-(--gold) focus:outline-none"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú Desplegable Mobile */}
      {isOpen && (
        <div className="md:hidden bg-(--wine-dark) border-b border-(--gold)/20 px-6 pt-4 pb-8 flex flex-col gap-4 text-center">
          <Link 
            href="#nosotros" 
            onClick={closeMenu}
            className="text-(--cream) hover:text-(--gold) text-xs uppercase tracking-[0.2em] font-semibold py-3 border-b border-(--gold)/10"
          >
            Historia
          </Link>
          <Link 
            href="#catalogo" 
            onClick={closeMenu}
            className="text-(--cream) hover:text-(--gold) text-xs uppercase tracking-[0.2em] font-semibold py-3 border-b border-(--gold)/10"
          >
            Catálogo
          </Link>
          <Link 
            href="#contacto" 
            onClick={closeMenu}
            className="text-(--cream) hover:text-(--gold) text-xs uppercase tracking-[0.2em] font-semibold py-3"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  )
}