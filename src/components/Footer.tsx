const Footer = () => {
  return (
    <footer className="text-center py-8 px-5 text-sm text-muted-foreground border-t border-border/20">
      <p>
        <strong className="text-foreground">Tech Mobile Floripa Assistência Técnica de Celulares e Notebooks</strong> © {new Date().getFullYear()}
        <br />
        Rua Ferdinand Demetz, 40 - Bela Vista, Palhoça - SC - CNPJ 47.558.493/0001-43
      </p>
    </footer>
  );
};

export default Footer;
