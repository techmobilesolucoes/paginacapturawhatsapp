import { useEffect, useRef } from 'react';

const services = [
  {
    image: 'https://iphoneros.com/wp-content/uploads/2022/09/tapatrasera-1392x832.jpg',
    badge: 'Consertos rápidos',
    title: 'Celulares',
    description: 'Troca de tela. Troca de bateria. Troca de conector de carga. Troca de vidro traseiro.',
    alt: 'Troca de tela de celular iPhone - Assistência técnica',
  },
  {
    image: 'https://raw.githubusercontent.com/techmobilesolucoes/Home/main/reparo%20em%20placa%20iphone.jpg',
    badge: 'Reparos avançados',
    title: 'Reparo em placa de celular',
    description: 'Seu aparelho ficou sem conserto por problema na placa? Nós temos a solução.',
    alt: 'Reparo em placa de celular - Microsoldagem',
  },
  {
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    badge: 'Reparo avançado Notebook',
    title: 'Reparo em placa de Notebook',
    description: 'Contamos com técnicos especializados e laboratório completo para realizar todos os tipos de reparo.',
    alt: 'Reparo em placa de notebook MacBook - Assistência técnica',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-24 px-5 bg-cover bg-center bg-no-repeat rounded-2xl mx-auto max-w-7xl"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5,11,16,0.6), rgba(5,11,16,0.6)), url('https://github.com/techmobilesolucoes/Home/blob/main/tecnico%20trabalhando.jpg?raw=true')`,
      }}
      aria-labelledby="servicos-heading"
    >
      <h2 id="servicos-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
        Serviços
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`
              bg-gradient-to-b from-card to-background rounded-2xl border border-border/20 overflow-hidden
              transition-all duration-400 hover:-translate-y-2 hover:shadow-[var(--shadow-card)]
              focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-4
              animate-fade-in-up
              ${index === 0 ? 'delay-150' : index === 1 ? 'delay-300' : 'delay-450'}
            `}
            tabIndex={0}
          >
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-44 object-cover block"
              loading="lazy"
              decoding="async"
              width="400"
              height="180"
            />
            <div className="p-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-3">
                {service.badge}
              </span>
              <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
