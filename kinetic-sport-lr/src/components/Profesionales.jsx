const profesionales = [
  // seccion de profesionales
  // agregar en formato json
  {
    nombre: "Lic. David Ramirez",
    especialidad: "Kinesiología Deportiva",
    descripcion:
      "Especialista en rehabilitación funcional de lesiones deportivas. Más de 10 años de experiencia.",
    imagen: "images/david.png",
    whatsapp: "543804123456",
    instagram: "https://instagram.com/david",
  },
  {
    nombre: "Lic. Ramirez David",
    especialidad: "Kinesiología Deportiva",
    descripcion:
      "Especialista en rehabilitación funcional de lesiones deportivas. Más de 10 años de experiencia.",
    imagen: "images/david.png",
    whatsapp: "543804654321",
    instagram: "https://instagram.com/david",
  },
  {
    nombre: "Lic. Ramirez David",
    especialidad: "Kinesiología Deportiva",
    descripcion:
      "Especialista en rehabilitación funcional de lesiones deportivas. Más de 10 años de experiencia.",
    imagen: "images/david.png",
    whatsapp: "543804654321",
    instagram: "https://instagram.com/david",
  },
];

const Profesionales = () => {
  return (
    <section id="profesionales" className="py-16 px-4 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Nuestro Equipo</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {profesionales.map((prof, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={prof.imagen}
              alt={prof.nombre}
              className="w-45 h-45 object-cover  mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{prof.nombre}</h3>
            <p className="text-green-600 font-medium">{prof.especialidad}</p>
            <p className="text-sm mt-2 text-gray-600">{prof.descripcion}</p>

            <div className="mt-4 flex justify-center gap-4">
              <a
                href={`https://wa.me/${prof.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full transition"
              >
                WhatsApp
              </a>
              <a
                href={prof.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-full transition"
              >
                Instagram
              </a>
              <a
                href="#contacto"
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-1 py-2 rounded-full transition"
              >
                Solicitar Turno
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profesionales;
