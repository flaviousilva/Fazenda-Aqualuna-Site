
const IMAGES = [
 "https://raw.githubusercontent.com/flaviousilva/imagens/da095067c0bce0d3a81a2a3a39d702dc97a48048/olhodagua.JPG"
,
"https://raw.githubusercontent.com/flaviousilva/imagens/da095067c0bce0d3a81a2a3a39d702dc97a48048/Faz%20Olho%20Dagua%20DJI_0060.JPG"
 
];

const Gallery = () => (
  <section
    id="galeria"
    className="container py-16"
  >
    <h2 className="font-playfair text-3xl font-bold text-blue-500 mb-8 text-center">
      Fotos da Olho D'Água
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
