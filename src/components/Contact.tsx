
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
    <section id="contato" className="bg-soft-blue/80 py-16">
      <div className="container max-w-2xl mx-auto rounded-xl shadow-lg bg-white/80 p-8">
        <h2 className="font-playfair text-3xl font-bold text-aqua mb-6 text-center">
          Entre em contato
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
              className="flex-1 px-4 py-3 rounded border border-gray-200 bg-white font-inter text-gray-700 outline-none focus:ring-2 focus:ring-aqua"
            />
            <input
              required
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded border border-gray-200 bg-white font-inter text-gray-700 outline-none focus:ring-2 focus:ring-aqua"
            />
          </div>
          <textarea
            required
            placeholder="Mensagem"
            rows={4}
            className="px-4 py-3 rounded border border-gray-200 bg-white font-inter text-gray-700 outline-none focus:ring-2 focus:ring-aqua"
          />
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-aqua text-white font-semibold rounded hover:bg-aqua/90 transition active:scale-95 font-inter shadow"
          >
            Enviar mensagem
          </button>
          {sent && (
            <span className="text-green-700 text-center bg-soft-green rounded py-2 animate-fade-in">
              Sua mensagem foi enviada! Em breve retornaremos.
            </span>
          )}
        </form>
        <div className="mt-8 text-center text-gray-700 font-inter">
          <strong>Endereço:</strong> Fazenda Da Guia, LUCENA - PB, 58.315-000, Brasil <br />
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/559999999999" target="_blank" rel="noopener noreferrer" className="text-aqua underline hover:text-aqua/70">
             (83) 3293 5272
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
