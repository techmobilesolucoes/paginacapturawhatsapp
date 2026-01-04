const carouselImages = [
  {
    src: 'https://github.com/techmobilesolucoes/imagensdeservi-os/blob/main/IPHONE%2013%20PRO%20FINAL.png?raw=true',
    alt: 'Reparo iPhone 13 Pro - Troca de tela e bateria',
  },
  {
    src: 'https://github.com/techmobilesolucoes/Home/blob/main/assistencia_tecnica_macbook_brasilia_aguas_claras_1080x.jpg?raw=true',
    alt: 'Assistência técnica MacBook - Reparo profissional',
  },
  {
    src: 'https://github.com/techmobilesolucoes/Home/blob/main/iphone%20aberto.jpg?raw=true',
    alt: 'Reparo interno de iPhone - Manutenção especializada',
  },
  {
    src: 'https://github.com/techmobilesolucoes/Home/blob/main/assistencia%20notebook.jpg?raw=true',
    alt: 'Assistência técnica notebook - Conserto profissional',
  },
  {
    src: 'https://github.com/techmobilesolucoes/imagensdeservi-os/blob/main/IPHONE%2014%20FINAL.png?raw=true',
    alt: 'Reparo iPhone 14 - Serviço especializado',
  },
  {
    src: 'https://github.com/techmobilesolucoes/imagensdeservi-os/blob/main/reparo%20em%20mac.jpg?raw=true',
    alt: 'Reparo em Mac - Assistência técnica Apple',
  },
];

const Carousel = () => {
  return (
    <section
      id="carrossel"
      className="py-16 px-5 text-center"
      role="region"
      aria-label="Galeria de serviços realizados"
    >
      <div className="overflow-hidden max-w-4xl mx-auto rounded-2xl border border-border/30 h-52 md:h-80">
        <div className="flex w-[200%] animate-carousel items-stretch gap-0">
          {/* Duplicate images for infinite scroll effect */}
          {[...carouselImages, ...carouselImages].map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="flex-shrink-0 w-[16.666%] h-52 md:h-80 object-cover block m-0 p-0"
              loading="lazy"
              decoding="async"
              width="300"
              height="320"
            />
          ))}
        </div>
      </div>
      <noscript>
        <p className="text-center text-muted-foreground">Ative o JavaScript para ver o carrossel.</p>
      </noscript>
    </section>
  );
};

export default Carousel;
