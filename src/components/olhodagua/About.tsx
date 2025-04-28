
const About = () => (
  <section
    id="sobre"
    className="container my-16 md:my-24 flex flex-col md:flex-row gap-10 md:gap-16 items-center"
  >
    <img
      src="https://raw.githubusercontent.com/flaviousilva/imagens/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/DJI_0023.JPG"
      alt="Equipe da fazenda"
      className="rounded-xl shadow-lg w-full max-w-[350px] md:max-w-[420px] object-cover"
    />
    <div className="flex-1">
      <h2 className="font-playfair text-3xl font-bold text-blue-500 mb-4">Nossa História</h2>
      <p className="font-inter text-gray-700 text-lg mb-4">
        A Fazenda Olho D'Água nasceu da paixão pela carcinicultura de qualidade.
        Nosso compromisso é produzir os melhores camarões do Brasil, unindo técnicas tradicionais
        com tecnologia de ponta, sempre respeitando o equilíbrio ambiental.
      </p>
      <ul className="font-inter text-md text-gray-700 mt-2 space-y-2 list-disc list-inside">
        <li>Excelência em carcinicultura sustentável</li>
        <li>Monitoramento constante da qualidade da água</li>
        <li>Produção com baixo impacto ambiental</li>
      </ul>
    </div>
  </section>
);

export default About;
