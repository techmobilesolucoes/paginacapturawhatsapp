import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#aviso-legal', label: 'Aviso Legal' },
  { href: '#depoimentos', label: 'Avaliações' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/20">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-9">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <h1 className="m-0">
            <a
              href="/"
              className="inline-flex items-center text-foreground no-underline focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 rounded-lg"
              aria-label="Ir para página inicial"
            >
              <img
                src="https://github.com/techmobilesolucoes/Home/blob/main/LOGOFINAL2CORSITE.jpg?raw=true"
                alt="Tech Mobile Floripa - Assistência Técnica"
                className="h-20 md:h-28 w-auto max-w-[280px] object-contain"
                width="280"
                height="110"
                loading="eager"
                decoding="async"
              />
            </a>
          </h1>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground bg-transparent border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="primary-nav"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav
          id="primary-nav"
          className={`
            md:flex md:gap-6 md:items-center md:flex-1 md:justify-center md:max-w-[60%] md:static md:bg-transparent md:opacity-100 md:max-h-none
            ${isMenuOpen
              ? 'absolute left-0 right-0 top-full bg-background/95 max-h-[420px] opacity-100 z-45 block rounded-b-xl border-b border-border/20'
              : 'absolute left-0 right-0 top-full max-h-0 opacity-0 overflow-hidden md:overflow-visible'
            }
            transition-all duration-300 ease-out
          `}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`
                block md:inline-block w-full md:w-auto text-left md:text-center
                px-4 md:px-3 py-4 md:py-2
                text-sm font-medium no-underline
                border-t border-border/10 md:border-0
                transition-all duration-150 ease-out
                rounded-lg cursor-pointer bg-transparent
                relative
                ${activeSection === link.href
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
                }
                focus:outline-none focus:ring-2 focus:ring-primary/25
              `}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="hidden md:block absolute left-3 right-3 bottom-0 h-1 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Badge */}
        <div className="hidden lg:flex items-center ml-9" aria-hidden="true">
          <img
            src="https://github.com/techmobilesolucoes/Home/blob/main/parcelamento10x.jpg?raw=true"
            alt="Parcelamento em até 10x"
            className="h-20 md:h-28 w-auto max-w-[280px] object-contain"
            width="280"
            height="110"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
