
const Hero = () => (
  <section
    id="inicio"
    className="relative h-[80vh] min-h-[480px] flex items-center bg-soft-blue overflow-hidden"
  >
    <img
      src="https://raw.githubusercontent.com/flaviousilva/imagens/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/DJI_0009.JPG"
      alt="Fazenda de camarão"
      className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      draggable="false"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-white/70" />
    <div className="relative container z-10 flex flex-col items-start max-w-2xl py-10 animate-fade-in">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow">
        Bem-vindo à Olho D'Água
      </h1>
      <p className="font-inter text-lg md:text-xl text-gray-800 mb-6">
        Tradição e inovação na carcinicultura, produzindo camarão premium com responsabilidade ambiental.
      </p>
      <a
        href="#contato"
        className="inline-block font-inter px-7 py-3 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 active:scale-95 transition focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Fale conosco
      </a>
    </div>
  </section>
);

export default Hero;
