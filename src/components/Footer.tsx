
const Footer = () => (
  <footer className="bg-aqua text-white py-6 mt-4">
    <div className="container text-center flex flex-col gap-1">
      <div className="flex justify-center items-center gap-2 mb-2">
        <img 
          src="/lovable-uploads/3d33c833-f0e1-4e81-87e8-818dfc317faf.png" 
          alt="Aqualuna Logo" 
          className="h-8 w-auto" 
        />
        <span className="font-playfair text-lg font-bold">Fazenda Aqualuna</span>
      </div>
      <span className="font-inter text-sm">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </span>
      <span className="font-inter text-sm">
        
      </span>
    </div>
  </footer>
);

export default Footer;
