
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 fixed top-0 left-0 z-40 shadow-sm backdrop-blur">
      <nav className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          {/* Logo Aqualuna */}
          <a href="/" className="flex items-center gap-2 font-playfair font-bold text-xl text-aqua tracking-wide">
            <div className="bg-white/30 rounded-full p-1">
              <img 
                src="/lovable-uploads/3d33c833-f0e1-4e81-87e8-818dfc317faf.png" 
                alt="Aqualuna Logo" 
                className="h-12 w-auto object-contain" 
              /> 
            </div>
            Aqualuna
          </a>
          
          {/* Separador vertical */}
          <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
          
          {/* Logo Olho D'Água - Placeholder, substitua pelo link correto quando o outro site estiver pronto */}
          <a href="#" className="hidden md:flex items-center gap-2 font-playfair font-bold text-xl text-blue-500 tracking-wide">
            <div className="bg-white/30 rounded-full p-1">
              <img 
                src="/lovable-uploads/fc8213ec-31eb-4933-9eea-e8b83064e6df.png" 
                alt="Olho D'Água Logo" 
                className="h-12 w-auto object-contain" 
              /> 
            </div>
            Olho D'Água
          </a>
        </div>
        
        <div className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-inter text-gray-700 hover:text-aqua transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 shadow animate-fade-in">
          {/* Logo Olho D'Água para mobile */}
          <a 
            href="#" 
            className="flex items-center gap-2 font-playfair font-bold text-lg text-blue-500 tracking-wide py-3 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            <div className="bg-white/30 rounded-full p-1">
              <img 
                src="/lovable-uploads/fc8213ec-31eb-4933-9eea-e8b83064e6df.png" 
                alt="Olho D'Água Logo" 
                className="h-12 w-auto object-contain" 
              /> 
            </div>
            Olho D'Água
          </a>
          
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block font-inter py-2 text-md text-gray-700 hover:text-aqua"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
