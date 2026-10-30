import { MessageCircle, MapPin, Phone } from 'lucide-react'

// Cambiar las URLs de Vercel por las rutas locales de public/images/
const heroImage = '/images/hero.webp'
const logo = '/images/logo.png'
const mark = '/images/icono.png'

export default function ComingSoonPage() {
  return (
    <main className="coming-shell">
      <div className="coming-photo" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
      <div className="coming-overlay" aria-hidden="true" />
      
      <header className="coming-header">
        <div className="coming-header-brand">
          <img src={logo} alt="Milione Chacinados" className="coming-header-logo" />
          <img src={mark} alt="" className="coming-header-mark" aria-hidden="true" />
        </div>
        <span>Chacabuco · Buenos Aires</span>
      </header>

      <section className="coming-content" aria-labelledby="coming-title">
        <p className="coming-kicker">Producto artesanal completamente de origen</p>
        <p className="coming-intro">Estamos preparando</p>
        <h1 id="coming-title" className="coming-headline">
          nuestra nueva<br />
          <em>vidriera digital.</em>
        </h1>
        <div className="coming-divider" />
        <p className="coming-soon">Próximamente</p>
        <p className="coming-note">Una nueva forma de descubrir nuestros sabores, conocer nuestra historia y hacer tu pedido.</p>
      </section>

      <footer className="coming-footer">
        <a href="https://maps.google.com/?q=Santa+Fe+99,+Chacabuco" target="_blank" rel="noreferrer">
          <MapPin aria-hidden="true" />Santa Fe 99 · Chacabuco
        </a>
        <a href="tel:+542352471745">
          <Phone aria-hidden="true" />+54 2352 47-1745
        </a>
        <span>© {new Date().getFullYear()} Milione</span>
      </footer>

      <a 
        className="whatsapp-float coming-whatsapp" 
        href="https://wa.me/5492352469120?text=Hola%2C%20Vengo%20de%20la%20web%20y%20quiero%20hacer%20una%20consulta" 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Consultar por WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
        <span>Consultas<br />y pedidos</span>
      </a>
    </main>
  )
}


