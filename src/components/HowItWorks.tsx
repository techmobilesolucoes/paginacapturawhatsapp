import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const steps = [
  'Você solicita atendimento via WhatsApp.',
  'Agenda a visita técnica.',
  'O técnico vai até você.',
];

const HowItWorks = () => {
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
      id="como-funciona"
      ref={sectionRef}
      className="py-20 px-5 max-w-7xl mx-auto bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl"
      aria-labelledby="como-funciona-heading"
    >
      <h2 id="como-funciona-heading" className="text-3xl md:text-4xl font-bold text-center mb-10 animate-fade-in-up">
        Como funciona?
      </h2>

      <div className="grid gap-6 max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`
              flex items-start gap-4 pl-2
              animate-fade-in-up
              ${index === 0 ? 'delay-150' : index === 1 ? 'delay-300' : 'delay-450'}
            `}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
              <Check size={18} strokeWidth={3} />
            </div>
            <p className="text-lg text-foreground pt-1">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
