import "./Contact.css";

export default function Contact() {
    return (
      <section id="contacto" className="py-20 bg-gray-100">
        <div className="containerContact">
          <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
          <form className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label htmlFor="nombre" className="block mb-2">Nombre:</label>
              <input type="text" id="nombre" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input type="email" id="email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="mensaje" className="block mb-2">Mensaje:</label>
              <textarea id="mensaje" className="w-full p-2 border rounded" rows="5" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Enviar
            </button>
          </form>
        </div>
      </section>
    );
  }