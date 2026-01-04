import { useState, useEffect } from 'react';

const LegalPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('legalAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('legalAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[9999]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
    >
      <div className="bg-gradient-to-b from-card to-background rounded-2xl max-w-md w-[90%] p-7 border border-border/30 shadow-2xl text-center">
        <h2 id="legal-title" className="text-xl font-bold text-foreground mt-0 mb-4">
          Aviso Legal
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          A <strong className="text-foreground">Tech Mobile Floripa</strong> é uma empresa independente,
          especializada na prestação de serviços de diagnóstico, manutenção e reparo de celulares,
          notebooks e computadores de diversas marcas e modelos. Não possuímos vínculo, afiliação,
          autorização ou representação oficial com fabricantes como Apple, Samsung, Motorola, Xiaomi,
          Dell, HP, Lenovo ou quaisquer outras marcas mencionadas em nosso site. Todas as marcas,
          nomes comerciais e logotipos citados pertencem exclusivamente aos seus respectivos
          proprietários e são utilizados apenas para fins de identificação dos dispositivos atendidos.
          Os serviços prestados pela Tech Mobile Floripa são realizados com base na experiência
          técnica de seus profissionais.
        </p>

        <button
          onClick={handleAccept}
          className="mt-3 px-8 py-3.5 border-0 rounded-full bg-primary text-primary-foreground font-bold cursor-pointer transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_hsla(163,73%,47%,0.4)] focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Entendi e continuar
        </button>
      </div>
    </div>
  );
};

export default LegalPopup;
