
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    formRef.current?.reset();
  }

  return (
    <section id="contato" className="bg-blue-50 py-16">
      <div className="container max-w-2xl mx-auto rounded-xl shadow-lg bg-white/80 p-8">
        <h2 className="font-playfair text-3xl font-bold text-blue-500 mb-6 text-center">
          Contate-nos
        </h2>
        <form
          ref={formRef}
          className="flex flex-col gap-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              required
              type="text"
              placeholder="Seu nome"
              className="flex-1 px-4 py-3 rounded border border-gray-200 bg-white font-inter text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              required
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded border border-gray-200 bg-white font-inter text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <textarea
            required
            placeholder="Sua mensagem"
            rows={4}
            className="px-4 py-3 rounded border border-gray-200 bg-white font-inter text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition active:scale-95 font-inter shadow"
          >
            Enviar sua mensagem
          </button>
          {sent && (
            <span className="text-green-700 text-center bg-green-50 rounded py-2 animate-fade-in">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </span>
          )}
        </form>
        <div className="mt-8 text-center text-gray-700 font-inter">
          <strong>Localização:</strong> Rua Engenho Amparo , ILHA DE ITAMARACÁ - PE, 53.900-000, Brasil <br />
          <strong>Telefone:</strong>{" "}
          <a href="https://wa.me/559999999999" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">
             (83) 3293 1234
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
