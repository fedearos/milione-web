import { MessageCircle, MapPin, Phone } from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HnOja7WJ3AVtdyovSrstcNk8JE5ngK.png'
const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milione-completo-logo-orsAV72uDj5iPerqa9Xu1V15zbQMeX.png'
const mark = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icono-iccTwYD08xRnLdqCUOFFRr3y6dkUe0.png'

export default function Page() {
  return (
    <main className="coming-shell">
      <div className="coming-photo" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
      <div className="coming-overlay" aria-hidden="true" />
      <header className="coming-header">
        <img src={logo} alt="Milione chacinados, producto artesanal" />
        <span>Chacabuco · Buenos Aires</span>
      </header>
      <section className="coming-content" aria-labelledby="coming-title">
        <p className="coming-kicker">Producto artesanal · Desde 1997</p>
        <div className="coming-brand">
          <img src={logo} alt="Milione" />
          <img className="coming-mark" src={mark} alt="" />
        </div>
        <p className="coming-intro">Estamos preparando</p>
        <h1 id="coming-title">nuestra nueva<br /><em>vidriera digital.</em></h1>
        <div className="coming-divider" />
        <p className="coming-soon">Próximamente</p>
        <p className="coming-note">Una nueva forma de descubrir nuestros sabores, conocer nuestra historia y hacer tu pedido.</p>
      </section>
      <footer className="coming-footer">
        <a href="https://maps.google.com/?q=Santa+Fe+99,+Chacabuco" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />Santa Fe 99 · Chacabuco</a>
        <a href="tel:+5492352469120"><Phone aria-hidden="true" />02352 15469120 / 15495477</a>
        <span>© {new Date().getFullYear()} Milione</span>
      </footer>
      <a className="whatsapp-float coming-whatsapp" href="https://wa.me/5492352469120?text=Hola%20Milione%2C%20quiero%20hacer%20una%20consulta" target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
        <MessageCircle aria-hidden="true" /><span>Consultas<br />y pedidos</span>
      </a>
    </main>
  )
}
