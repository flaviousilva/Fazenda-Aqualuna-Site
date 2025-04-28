
import Navbar from "@/components/olhodagua/Navbar";
import Hero from "@/components/olhodagua/Hero";
import About from "@/components/olhodagua/About";
import Products from "@/components/olhodagua/Products";
import Gallery from "@/components/olhodagua/Gallery";
import Contact from "@/components/olhodagua/Contact";
import Footer from "@/components/olhodagua/Footer";

const OlhoDaguaIndex = () => {
  return (
    <div className="font-inter bg-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default OlhoDaguaIndex;
