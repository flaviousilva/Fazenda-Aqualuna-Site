
const IMAGES = [
  "https://github.com/flaviousilva/imagens/raw/b0b27a1ee8198d8c1e7f56fede8faae7e6420c56/foto_principal.JPG" alt="Foto Principal da Fazenda" width="600">
,
  "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=400&q=80",
];

const Gallery = () => (
  <section
    id="galeria"
    className="container py-16"
  >
    <h2 className="font-playfair text-3xl font-bold text-aqua mb-8 text-center">
      Galeria da Fazenda
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
