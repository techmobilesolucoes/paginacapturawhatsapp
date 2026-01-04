import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const heroTexts = [
  {
    highlight1: 'Assistência Técnica especializada',
    text: 'em Celulares, Notebooks e Computadores em',
    highlight2: 'Florianópolis e Região',
  },
  {
    highlight1: 'Reparo rápido e profissional',
    text: 'com Atendimento',
    highlight2: 'a Domicílio',
  },
  {
    highlight1: 'Especialistas em iPhone, MacBook e iMac',
    text: 'com suporte para',
    highlight2: 'todas as marcas',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroTexts.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentText = heroTexts[currentIndex];

  return (
    <section
      className="py-24 md:py-32 px-5 text-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5,11,16,0.65), rgba(5,11,16,0.95)), url('https://github.com/techmobilesolucoes/Home/blob/main/laboratorio.jpg?raw=true')`,
      }}
      aria-label="Seção principal"
    >
      <div className="max-w-4xl mx-auto animate-fade-in-up show">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="text-primary">{currentText.highlight1}</span> {currentText.text}{' '}
          <span className="text-primary">{currentText.highlight2}</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-9">
          Consertamos seu aparelho aonde você estiver. Atendimento ágil e transparente.
        </p>

        <a
          href="https://wa.me/5548998049084"
          target="_blank"
          rel="noopener noreferrer"
          title="Abrir conversa no WhatsApp"
          className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-whatsapp-foreground font-bold text-lg rounded-full shadow-[var(--shadow-whatsapp)] hover:shadow-[var(--shadow-whatsapp-hover)] hover:-translate-y-0.5 transition-all duration-300 no-underline"
        >
          <MessageCircle size={22} />
          Solicitar Orçamento Gratuito
        </a>
      </div>
    </section>
  );
};

export default Hero;
