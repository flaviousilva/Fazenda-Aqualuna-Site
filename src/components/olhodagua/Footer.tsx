
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-blue-500 text-white py-6 mt-4">
    <div className="container text-center flex flex-col gap-1">
      <div className="flex justify-center items-center gap-6 mb-4">
        {/* Logo Olho D'Água */}
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/fc8213ec-31eb-4933-9eea-e8b83064e6df.png" 
            alt="Olho D'Água Logo" 
            className="h-12 w-auto" 
          />
          <span className="font-playfair text-lg font-bold">Fazenda Olho D'Água</span>
        </div>
        
        {/* Separador vertical */}
        <div className="h-8 w-px bg-white/30"></div>
        
        {/* Logo Aqualuna */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/3d33c833-f0e1-4e81-87e8-818dfc317faf.png" 
            alt="Aqualuna Logo" 
            className="h-12 w-auto" 
          />
          <span className="font-playfair text-lg font-bold">Fazenda Aqualuna</span>
        </Link>
      </div>
      <span className="font-inter text-sm">
        © {new Date().getFullYear()} Fazendas Olho D'Água e Aqualuna. Todos os direitos reservados.
      </span>
    </div>
  </footer>
);

export default Footer;
