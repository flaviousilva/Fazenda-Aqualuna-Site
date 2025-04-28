
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-aqua text-white py-6 mt-4">
    <div className="container text-center flex flex-col gap-1">
      <div className="flex justify-center items-center gap-6 mb-4">
        {/* Logo Aqualuna */}
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/3d33c833-f0e1-4e81-87e8-818dfc317faf.png" 
            alt="Aqualuna Logo" 
            className="h-8 w-auto" 
          />
          <span className="font-playfair text-lg font-bold">Fazenda Aqualuna</span>
        </div>
        
        {/* Separador vertical */}
        <div className="h-8 w-px bg-white/30"></div>
        
        {/* Logo Olho D'Água */}
        <Link to="/olhodagua" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/3d33c833-f0e1-4e81-87e8-818dfc317faf.png" 
            alt="Olho D'Água Logo" 
            className="h-8 w-auto" 
          />
          <span className="font-playfair text-lg font-bold">Fazenda Olho D'Água</span>
        </Link>
      </div>
      <span className="font-inter text-sm">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </span>
    </div>
  </footer>
);

export default Footer;
