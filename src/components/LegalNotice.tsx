import { useEffect, useRef } from 'react';

const LegalNotice = () => {
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
      id="aviso-legal"
      ref={sectionRef}
      className="py-20 px-5 max-w-7xl mx-auto text-center bg-gradient-to-b from-card to-background rounded-2xl"
      aria-labelledby="aviso-legal-heading"
    >
      <h2 id="aviso-legal-heading" className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
        Aviso Legal
      </h2>

      <div className="text-muted-foreground text-base max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
        <p>
          A <strong className="text-foreground">Tech Mobile Floripa</strong> é uma empresa independente,
          especializada na prestação de serviços de diagnóstico, manutenção e reparo de celulares,
          notebooks e computadores de diversas marcas e modelos. Não possuímos vínculo, afiliação,
          autorização ou representação oficial com fabricantes como Apple, Samsung, Motorola, Xiaomi,
          Dell, HP, Lenovo ou quaisquer outras marcas mencionadas em nosso site. Todas as marcas, nomes
          comerciais e logotipos citados pertencem exclusivamente aos seus respectivos proprietários e são
          utilizados apenas para fins de identificação dos dispositivos atendidos. Os serviços prestados
          pela Tech Mobile Floripa são realizados com base na experiência técnica de seus profissionais.
        </p>
      </div>
    </section>
  );
};

export default LegalNotice;
