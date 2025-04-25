
const Footer = () => (
  <footer className="bg-aqua text-white py-6 mt-4">
    <div className="container text-center flex flex-col gap-1">
      <span className="font-playfair text-lg font-bold">Fazenda Feliz 🦐</span>
      <span className="font-inter text-sm">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </span>
      <span className="font-inter text-sm">
        Desenvolvido com <span className="text-pink-300">♥</span> por Lovable
      </span>
    </div>
  </footer>
);

export default Footer;
