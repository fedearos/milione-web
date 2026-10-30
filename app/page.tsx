import { MapPin, Phone, Clock } from 'lucide-react'
import { catalogData } from '@/data/catalog'

const heroImage = '/images/hero.webp'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. PORTADA (HERO SECTION) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 isolate">
        <div 
          className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat saturate-75" 
          style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: '59% center' }} 
          aria-hidden="true" 
        />
        <div className="absolute inset-0 z-[-1] bg-linear-to-r from-[#140506]/95 via-[#26080a]/80 to-[#140506]/60" aria-hidden="true" />
        
        <div className="max-w-4xl w-full px-6 text-center lg:text-left flex flex-col items-center lg:items-start my-auto py-16">
          <p className="text-(--gold) text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
            Producto artesanal de origen
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6 text-(--cream)">
            La misma receta,<br className="hidden md:block" />
            <em className="text-(--gold) italic font-serif">las mismas manos.</em>
          </h1>
          
          <h2 className="text-(--text-soft) font-serif text-xl md:text-2xl font-normal max-w-2xl mb-10 leading-relaxed">
            El sabor de siempre. Cuidando la tradición desde el primer día.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#catalogo" 
              className="bg-(--wine) text-(--cream) border border-(--gold) px-8 py-3.5 uppercase tracking-widest text-xs font-bold hover:bg-(--gold) hover:text-(--wine-dark) transition-colors text-center shadow-md"
            >
              Ver Catálogo
            </a>
            <a 
              href="#contacto" 
className="border border-(--cream)/40 text-(--cream) px-8 py-3.5 uppercase tracking-widest text-xs font-bold hover:border-(--gold) hover:text-(--gold) transition-colors text-center"            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* 2. BLOQUE INTRODUCTORIO */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full border-b border-(--gold)/10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-(--gold) text-xs tracking-[0.2em] uppercase block mb-3 font-semibold">
              Tradición Chacabuquense
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-(--cream)">
              El auténtico sabor local
            </h2>
            <p className="text-(--text-soft) font-serif text-lg md:text-xl leading-relaxed italic border-l-2 border-(--gold)/50 pl-6 my-4">
              &ldquo;Desde 1984, venimos seleccionando los mejores ingredientes y supervisando cada receta. Porque el verdadero sabor de Chacabuco se mantiene vivo todos los días.&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-(--wine)/30 border border-(--gold)/20 flex items-center justify-center text-(--gold)/60 text-xs text-center p-4">
              [Foto: Marcelo trabajando]
            </div>
            <div className="aspect-3/4 bg-(--wine)/30 border border-(--gold)/20 flex items-center justify-center text-(--gold)/60 text-xs text-center p-4 translate-y-6">
              [Foto: Secadero de fiambres]
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOSOTROS / HISTORIA */}
      <section id="nosotros" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-6 text-(--gold)">Nuestra Historia</h2>
            <p className="text-(--text-soft) text-lg mb-4 leading-relaxed">
              En Chacinados Milione, respetamos los tiempos y procesos que heredamos. Cada producto que sale de nuestra fábrica en Chacabuco lleva consigo la dedicación de un trabajo hecho a mano.
            </p>
            <p className="text-(--text-soft) text-lg leading-relaxed">
              Nuestro secadero mantiene las condiciones exactas para garantizar el sabor único que nos caracteriza. No apuramos la naturaleza, la acompañamos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-(--wine)/30 border border-(--gold)/20 flex items-center justify-center text-(--gold)/50 text-sm">Foto Historia 1</div>
            <div className="aspect-3/4 bg-(--wine)/30 border border-(--gold)/20 flex items-center justify-center text-(--gold)/50 text-sm translate-y-8">Foto Historia 2</div>
          </div>
        </div>
      </section>

      {/* 4. CATÁLOGO */}
      <section id="catalogo" className="py-24 px-6 bg-(--wine)/10 border-y border-(--gold)/10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-(--gold)">Nuestros Productos</h2>
            <p className="text-(--text-soft) uppercase tracking-widest text-sm">Calidad de origen</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogData.map((product) => (
              <div key={product.id} className="bg-(--wine-dark) border border-(--gold)/20 p-6 hover:border-(--gold)/60 transition-colors group">
                <div className="aspect-video bg-[#2a1315] mb-6 flex items-center justify-center text-(--text-soft) text-xs">
                  [Imagen: {product.name}]
                </div>
                <span className="text-(--gold) text-xs uppercase tracking-wider mb-2 block">{product.category}</span>
                <h3 className="font-serif text-2xl mb-3 text-(--cream)">{product.name}</h3>
                <p className="text-(--text-soft) text-sm leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* 5. CONTACTO, UBICACIÓN Y HORARIOS */}
      <section id="contacto" className="pt-24 pb-12 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-20 items-start">
          <div>
            <h2 className="font-serif text-4xl mb-8 text-(--gold)">Encontranos</h2>
            <div className="flex flex-col gap-8">
              {/* Enlace directo a la ficha oficial de Chacinados Milione */}
              <a 
                href="https://www.google.com/maps/place/Chacinados+Milione/@-33.13137,-61.9024004,8z/data=!4m10!1m2!2m1!1sSanta+Fe+99,+Chacabuco!3m6!1s0x95b925b807f8870b:0x2a9c57d9fe1ae50f!8m2!3d-34.6422175!4d-60.4660268" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start gap-4 hover:text-(--gold) transition-colors group"
              >
                <MapPin className="text-(--gold) shrink-0 mt-1 h-6 w-6" />
                <div>
                  <strong className="block text-lg font-normal mb-1 text-(--cream) group-hover:text-(--gold) transition-colors">
                    Fábrica y Venta
                  </strong>
                  <span className="text-(--text-soft)">Santa Fe 99, Chacabuco<br/>Buenos Aires, Argentina</span>
                </div>
              </a>

              {/* Teléfono */}
              <a 
                href="tel:+542352471745" 
                className="flex items-start gap-4 hover:text-(--gold) transition-colors group"
              >
                <Phone className="text-(--gold) shrink-0 mt-1 h-6 w-6" />
                <div>
                  <strong className="block text-lg font-normal mb-1 text-(--cream) group-hover:text-(--gold) transition-colors">
                    Teléfono
                  </strong>
                  <span className="text-(--text-soft)">+54 2352 47-1745</span>
                </div>
              </a>

              {/* Horarios */}
              <div className="flex items-start gap-4">
                <Clock className="text-(--gold) shrink-0 mt-1 h-6 w-6" />
                <div>
                  <strong className="block text-lg font-normal mb-1 text-(--cream)">
                    Horarios de Atención
                  </strong>
                  <p className="text-(--text-soft) text-sm leading-relaxed">
                    <span className="block"><strong className="text-(--cream)">Lunes a Sábado:</strong> 09:00 a 13:00 hs y 17:30 a 21:00 hs</span>
                    <span className="block"><strong className="text-(--cream)">Domingos:</strong> Cerrado</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Iframe configurado con URL de embebido oficial */}
          <div className="w-full h-80 md:h-full min-h-80 rounded-sm overflow-hidden border border-(--gold)/20 shadow-lg">
            <iframe 
              title="Ubicación Chacinados Milione"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.2917721832446!2d-60.46860172346944!3d-34.64221749320297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b925b807f8870b%3A0x2a9c57d9fe1ae50f!2sChacinados%20Milione!5e0!3m2!1ses!2sar!4f13.1" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-(--gold)/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-(--text-soft)">
          <span>© {new Date().getFullYear()} Chacinados Milione</span>
          <span>Producto Artesanal · Chacabuco</span>
        </footer>
      </section>
    </div>
  )
}