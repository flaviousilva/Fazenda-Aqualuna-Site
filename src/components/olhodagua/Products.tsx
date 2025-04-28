
const Products = () => (
  <section
    id="produtos" 
    className="bg-blue-50 py-16"
  >
    <div className="container flex flex-col md:flex-row items-center md:gap-12">
      <div className="flex-1">
        <h2 className="font-playfair text-3xl font-bold text-blue-500 mb-4">
          Camarão premium
        </h2>
        <p className="font-inter text-gray-800 mb-4 text-lg">
          Na Fazenda Olho D'Água, produzimos camarões de excelência com processos 
          rigorosamente controlados que garantem a mais alta qualidade e sabor incomparável
          em cada produto.
        </p>
        <ul className="font-inter text-md text-gray-700 space-y-2 list-disc list-inside">
          <li>Variedades selecionadas para máximo sabor</li>
          <li>Rastreabilidade em toda a cadeia produtiva</li>
          <li>Diferentes tamanhos e apresentações</li>
          <li>Fornecimento para restaurantes e distribuidores</li>
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
