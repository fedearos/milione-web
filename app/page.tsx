import { MessageCircle, MapPin, Phone } from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HnOja7WJ3AVtdyovSrstcNk8JE5ngK.png'
const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milione-completo-logo-orsAV72uDj5iPerqa9Xu1V15zbQMeX.png'
const mark = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icono-iccTwYD08xRnLdqCUOFFRr3y6dkUe0.png'

export default function Page() {
  return (
    <main className="coming-shell">
      <div className="coming-photo" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
      <div className="coming-overlay" aria-hidden="true" />
      
      {/* Cabecera con Marca e Isotipo del Chanchito integrado al lado */}
      <header className="coming-header">
        <div className="coming-header-brand">
          <img src={logo} alt="Milione Chacinados" className="coming-header-logo" />
          <img src={mark} alt="" className="coming-header-mark" aria-hidden="true" />
        </div>
        <span>Chacabuco · Buenos Aires</span>
      </header>

      {/* Contenido Editorial Principal */}
      <section className="coming-content" aria-labelledby="coming-title">
        <p className="coming-kicker">Producto artesanal completamente de origen</p>
        
        {/* Bajada con tamaño menor preexistente */}
        <p className="coming-intro">Estamos preparando</p>
        
        {/* Título de 2 líneas restante */}
        <h1 id="coming-title" className="coming-headline">
          nuestra nueva<br />
          <em>vidriera digital.</em>
        </h1>
        
        <div className="coming-divider" />
        <p className="coming-soon">Próximamente</p>
        <p className="coming-note">Una nueva forma de descubrir nuestros sabores, conocer nuestra historia y hacer tu pedido.</p>
      </section>

      {/* Pie de página con datos de contacto */}
      <footer className="coming-footer">
        <a href="https://maps.google.com/?q=Santa+Fe+99,+Chacabuco" target="_blank" rel="noreferrer">
          <MapPin aria-hidden="true" />Santa Fe 99 · Chacabuco
        </a>
        <a href="tel:+542352471745">
          <Phone aria-hidden="true" />+54 2352 47-1745
        </a>
        <span>© {new Date().getFullYear()} Milione</span>
      </footer>

      {/* Flotante WhatsApp */}
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
