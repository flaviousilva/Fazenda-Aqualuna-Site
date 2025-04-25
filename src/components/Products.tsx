
const Products = () => (
  <section
    id="produtos"
    className="bg-soft-green py-16"
  >
    <div className="container flex flex-col md:flex-row items-center md:gap-12">
      <div className="flex-1">
        <h2 className="font-playfair text-3xl font-bold text-aqua mb-4">
          Camarão de qualidade superior
        </h2>
        <p className="font-inter text-gray-800 mb-4 text-lg">
          Nossos camarões são criados em águas puras e passam por rigorosos controles de qualidade em todas as etapas,
          desde o cultivo sustentável até a entrega. Atendemos restaurantes, varejistas e consumidores finais,
          sempre com compromisso e excelência.
        </p>
        <ul className="font-inter text-md text-gray-700 space-y-2 list-disc list-inside">
          <li>Fresco e saudável</li>
          <li>Opções vivas, inteiras e congeladas</li>
          <li>Entrega refrigerada e segura</li>
        </ul>
      </div>
      <img
        src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=430&q=80"
        alt="Camarão fresco"
        className="rounded-xl shadow-xl mt-10 md:mt-0 max-w-[340px] object-cover"
      />
    </div>
  </section>
);

export default Products;
