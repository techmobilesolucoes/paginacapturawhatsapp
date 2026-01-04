import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Victor Bentos',
    date: '2025-01-01',
    text: 'Veio até minha casa e para minha surpresa me mostrou que o problema do meu telefone era muito mais simples do que eu esperava, consertando na hora. Pela honestidade, transparência e profissionalismo, indico totalmente.',
  },
  {
    name: 'Abigail Vaccaro',
    date: '2025-01-02',
    text: 'Excelente profissional, de confiança. Levou nossos aparelhos e realizou o serviço no mesmo dia. Indico e confio! Obrigada pelo atendimento.',
  },
  {
    name: 'Paulo Bossle',
    date: '2025-01-03',
    text: 'Precisei de atendimento na minha loja, a experiência foi incrível. No mesmo dia já agendei outro serviço para meu computador pessoal. Serviço de qualidade e profissional.',
  },
];

const Testimonials = () => {
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
      id="depoimentos"
      ref={sectionRef}
      className="py-16 px-5 mx-auto max-w-7xl bg-cover bg-center bg-no-repeat rounded-2xl my-10"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5,11,16,0.65), rgba(5,11,16,0.7)), url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80')`,
      }}
      role="region"
      aria-labelledby="depoimentos-heading"
    >
      <h2 id="depoimentos-heading" className="text-2xl md:text-3xl font-bold text-center mb-8 animate-fade-in-up">
        Somos 5 Estrelas no Google. Veja o que dizem nossos clientes.
      </h2>

      {/* Google Review Box */}
      <div className="mx-auto mb-12 p-6 max-w-md text-center rounded-2xl bg-black/45 border border-border/30 animate-fade-in-up">
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Já utilizou nossos serviços?
          <br />
          <strong className="text-foreground">Escaneie o QR Code e avalie a Tech Mobile Floripa no Google</strong>
        </p>

        <img
          src="https://github.com/techmobilesolucoes/Home/blob/main/qr%20code%20avalia%C3%A7%C3%A3o%20do%20google.png?raw=true"
          alt="QR Code para avaliação no Google da Tech Mobile Floripa"
          className="block mx-auto p-2 bg-white rounded-xl mb-4"
          loading="lazy"
          decoding="async"
          width="160"
          height="160"
        />

        <span className="block text-muted-foreground text-sm mb-3">Ou</span>

        <a
          href="https://g.page/r/CZaiGYPVZQ7YEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors no-underline"
        >
          Clique aqui para avaliar
        </a>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="bg-gradient-to-b from-card/80 to-background/60 rounded-2xl p-6 border border-border/20 min-h-40 animate-fade-in-up"
            itemScope
            itemType="https://schema.org/Review"
          >
            <meta itemProp="author" content={testimonial.name} />
            <meta itemProp="datePublished" content={testimonial.date} />

            <div className="flex gap-1.5 mb-3" aria-label="5 estrelas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p itemProp="reviewBody" className="text-muted-foreground text-sm leading-relaxed mb-4">
              {testimonial.text}
            </p>

            <div className="font-bold text-foreground text-sm">
              <span itemProp="author">{testimonial.name}</span>
            </div>

            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
              <meta itemProp="ratingValue" content="5" />
              <meta itemProp="bestRating" content="5" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
