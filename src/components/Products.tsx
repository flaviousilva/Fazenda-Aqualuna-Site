
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
          desde o cultivo sustentável até a entrega. 
        </p>
        <ul className="font-inter text-md text-gray-700 space-y-2 list-disc list-inside">
          
        </ul>
      </div>
      <img
        src="https://raw.githubusercontent.com/flaviousilva/imagens/7a3905855affbfd2e59d53dcc995137e0c2d33df/480caa7c-c1d3-4dd3-afc4-7aed6f48fa52.JPG"
        alt="Camarão fresco"
        className="rounded-xl shadow-xl mt-10 md:mt-0 max-w-[340px] object-cover"
      />
    </div>
  </section>
);

export default Products;
