
const IMAGES = [
 "https://raw.githubusercontent.com/flaviousilva/imagens/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/foto_principal.JPG"
,
 "https://raw.githubusercontent.com/flaviousilva/imagens/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/DJI_0023.JPG",
 "https://raw.githubusercontent.com/flaviousilva/imagens/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/DJI_0009.JPG",
 "https://raw.githubusercontent.com/flaviousilva/imagens/8d4e706d2c51b6c969ca3abb483651f7c9e82965/foto_viveiro.jpg",
 
];

const Gallery = () => (
  <section
    id="galeria"
    className="container py-16"
  >
    <h2 className="font-playfair text-3xl font-bold text-aqua mb-8 text-center">
      Fotos da Aqualuna
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {IMAGES.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Fazenda foto ${i + 1}`}
          className="rounded-lg shadow-md object-cover w-full h-48 transition transform hover:scale-105"
        />
      ))}
    </div>
  </section>
);

export default Gallery;
