
const IMAGES = [
 "https://raw.githubusercontent.com/flaviousilva/imagens/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/foto_principal.JPG"
,
 "https://raw.githubusercontent.com/flaviousilva/imagens/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/DJI_0023.JPG",
 "https://raw.githubusercontent.com/flaviousilva/imagens/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/DJI_0009.JPG",
 "https://raw.githubusercontent.com/flaviousilva/imagens/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/Aqualina%20DJI_0041.JPG?token=GHSAT0AAAAAADC3GWRAZXPU3HZ55PILDHME2APWQDA",
 
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
