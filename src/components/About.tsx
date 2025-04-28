
const About = () => (
  <section
    id="sobre"
    className="container my-16 md:my-24 flex flex-col md:flex-row gap-10 md:gap-16 items-center"
  >
    <img
      src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80"
      alt="Equipe da fazenda"
      className="rounded-xl shadow-lg w-full max-w-[350px] md:max-w-[420px] object-cover"
    />
    <div className="flex-1">
      <h2 className="font-playfair text-3xl font-bold text-aqua mb-4">Sobre nós</h2>
      <p className="font-inter text-gray-700 text-lg mb-4">
        Somos referência em criação sustentável de camarão no Brasil.
        Há mais de 10 anos, produzimos camarão de altíssima qualidade respeitando o meio ambiente,
        garantindo sabor, segurança alimentar e responsabilidade social.
      </p>
      <ul className="font-inter text-md text-gray-700 mt-2 space-y-2 list-disc list-inside">
        <li>Produção sustentável e rastreável</li>
        <li>Qualidade premium garantida</li>
        <li>Compromisso com o cliente e o planeta</li>
      </ul>
    </div>
  </section>
);

export default About;
