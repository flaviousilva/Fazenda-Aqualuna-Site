
import Navbar from "@/components/aqualuna/Navbar";
import Hero from "@/components/aqualuna/Hero";
import About from "@/components/aqualuna/About";
import Products from "@/components/aqualuna/Products";
import Gallery from "@/components/aqualuna/Gallery";
import Contact from "@/components/aqualuna/Contact";
import Footer from "@/components/aqualuna/Footer";

const AqualunaIndex = () => {
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

export default AqualunaIndex;
