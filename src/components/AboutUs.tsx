import { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const AboutUs = () => {
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
      id="quem-somos"
      ref={sectionRef}
      className="py-20 px-5 max-w-7xl mx-auto text-center bg-gradient-to-b from-card to-background rounded-2xl"
      aria-labelledby="quem-somos-heading"
    >
      <h2 id="quem-somos-heading" className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
        Quem Somos
      </h2>

      <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
        Somos a Tech Mobile Floripa, uma assistência técnica especializada em celulares, notebooks e
        computadores, criada para oferecer soluções completas, seguras e eficientes em tecnologia.
        Atuamos com todas as marcas e modelos, com destaque para iPhones, MacBooks e iMacs, unindo
        conhecimento técnico avançado, transparência e atendimento de alto padrão.
      </p>

      <a
        href="https://wa.me/5548998049084"
        target="_blank"
        rel="noopener noreferrer"
        title="Abrir conversa no WhatsApp"
        className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-whatsapp-foreground font-bold rounded-full shadow-[var(--shadow-whatsapp)] hover:shadow-[var(--shadow-whatsapp-hover)] hover:-translate-y-0.5 transition-all duration-300 no-underline animate-fade-in-up"
      >
        <MessageCircle size={20} />
        Falar com Técnico
      </a>
    </section>
  );
};

export default AboutUs;
