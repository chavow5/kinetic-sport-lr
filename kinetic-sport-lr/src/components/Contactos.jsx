import { useState } from "react";

const Contact = () => {
  const [mensaje, setMensaje] = useState("");

  const numero = "543804201334"; // numero + 54
  const nombre = "Kinetic Sport"; // nombre de contacto

  const handleEnviarWhatsApp = () => {
    const texto = encodeURIComponent(mensaje);
    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-16 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Turnos y Contacto</h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-6xl mx-auto">
        {/* Sección Turnos */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">Turnos por WhatsApp</h3>
          <p className="mb-2 text-gray-700">
            Podés solicitar tu turno enviando un mensaje por WhatsApp. Indicá tu nombre, motivo de la consulta y disponibilidad horaria.
          </p>
          <p className="mb-2 text-sm text-gray-600 italic">
            Vas a escribirle a <span className="font-semibold text-gray-800">{nombre}</span> al número <span className="font-semibold">3804-201334</span>
          </p>

          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows="3"
            placeholder="Escribí tu mensaje para solicitar un turno..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>

          <button
            onClick={handleEnviarWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded shadow transition-transform hover:scale-105 disabled:opacity-50"
            disabled={!mensaje.trim()}
          >
            Enviar WhatsApp
          </button>
        </div>
        {/* info de contacto */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
          <p className="mb-4 flex items-center gap-2 text-lg">
            <span role="img" aria-label="ubicación">
              📍
            </span>
            <a
              href="https://www.google.com/maps?q=Av.+Alem+191,+La+Rioja,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {/* agregar la ubicacion */}
              Av. Alem 191, La Rioja
            </a>
          </p>
          <p className="mb-4 flex items-center gap-2 text-lg">
            <span role="img" aria-label="teléfono">
              📞
            </span>
            {/* agregar numero de telefono */}
            3804-201334
          </p>
        </div>

        {/* Mapa */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg animate-fade-in">
          <h3 className="text-xl font-semibold mb-4">
            Ubicación del Consultorio
          </h3>
          <div className="w-full h-64 rounded overflow-hidden border border-gray-200">
            <iframe
              title="Ubicación Consultorio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13903.607461067511!2d-66.87112942663784!3d-29.402426731865763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427db5ea7d96401%3A0x579c3a855274a905!2sKinetic%20Sport%20%22Centro%20M%C3%A9dico%2C%20Rehabilitaci%C3%B3n%2C%20Nutrici%C3%B3n%20%26%20Entrenamiento%20Deportivo!5e0!3m2!1ses-419!2sar!4v1747010241337!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
