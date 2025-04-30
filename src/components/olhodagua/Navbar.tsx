
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
          {/* Logo Olho D'Água - Este é o logo principal nesta página */}
          <a href="/olhodagua" className="flex items-center gap-2 font-playfair font-bold text-xl text-blue-500 tracking-wide">
            <div className="bg-white/30 rounded-full p-1">
              <img 
                src="https://raw.githubusercontent.com/flaviousilva/imagens/bf10a15328b37e828860f4fef729bb499bde81b4/image.png" 
                alt="Olho D'Água Logo" 
                className="h-14 w-auto object-contain" 
              /> 
            </div>
            Olho D'Água
          </a>
          
          {/* Separador vertical */}
          <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
          
          {/* Logo Aqualuna - Link para a página da Aqualuna */}
          <Link to="/" className="hidden md:flex items-center gap-2 font-playfair font-bold text-xl text-aqua tracking-wide">
            <div className="bg-white/30 rounded-full p-1">
              <img 
                src="https://raw.githubusercontent.com/flaviousilva/imagens/9677315af4dc12cd6594e73bb0e3c8bf7cc0d66b/Logo%20Aqualuna.png" 
                alt="Aqualuna Logo" 
                className="h-14 w-auto object-contain" 
              /> 
            </div>
            Aqualuna
          </Link>
        </div>
        
        <div className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-inter text-gray-700 hover:text-blue-500 transition-colors duration-200"
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
          {/* Logo Aqualuna para mobile - Link para a página da Aqualuna */}
          <Link 
            to="/" 
            className="flex items-center gap-2 font-playfair font-bold text-lg text-aqua tracking-wide py-3 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            <div className="bg-white/30 rounded-full p-1">
              <img 
                src="/lovable-uploads/3d33c833-f0e1-4e81-87e8-818dfc317faf.png" 
                alt="Aqualuna Logo" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            Aqualuna
          </Link>
          
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block font-inter py-2 text-md text-gray-700 hover:text-blue-500"
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
