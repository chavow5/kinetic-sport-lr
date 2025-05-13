import { useState } from "react";

const services = [
  {
    name: "Nutrición deportiva",
    icon: "🥗",
    img: "/img/nutricion.jpg",
    description: "Planificación nutricional personalizada para deportistas.",
    professionals: ["Lic. Ana Gómez"],
  },
  {
    name: "Kinesiología y rehabilitación",
    icon: "🦵",
    img: "/img/kinesiologia.jpg",
    description: "Tratamientos de recuperación post-quirúrgica y lesiones crónicas.",
    professionals: ["Lic. Martín Pérez", "Lic. Laura Sánchez"],
  },
  {
    name: "Gimnasio",
    icon: "🏋️‍♂️",
    img: "/img/gimnasio.jpg",
    description: "Entrenamiento guiado para mejorar fuerza y resistencia.",
    professionals: ["Prof. Diego Ramírez"],
  },
  {
    name: "Kinesiología deportiva",
    icon: "🤸",
    img: "/img/kinesiologia-deportiva.jpg",
    description: "Atención integral para lesiones deportivas agudas.",
    professionals: ["Lic. Camila Torres"],
  },
  {
    name: "Médico deportólogo",
    icon: "🩺",
    img: "/img/medico-deportologo.jpg",
    description: "Evaluación médica para deportistas y seguimiento clínico.",
    professionals: ["Dr. Nicolás Romero"],
  },
  {
    name: "Férulas 3D",
    icon: "🦾",
    img: "/img/ferulas3d.jpg",
    description: "Férulas personalizadas para inmovilización y soporte.",
    professionals: ["Lic. Mariana Duarte"],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleInfo = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="servicios" className="py-12 bg-blue-950">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-4 bg-white shadow rounded cursor-pointer transition hover:scale-[1.02] duration-300"
            onClick={() => toggleInfo(i)}
          >
            <img
              src={s.img}
              alt={s.name}
              className="w-20 h-20 object-cover rounded-full mb-2 border border-gray-200 mx-auto"
              loading="lazy"
            />
            <div className="text-3xl mb-1">{s.icon}</div>
            <p className="font-semibold">{s.name}</p>
            <p className="text-gray-500 text-sm mt-2">Haz clic para ampliar ⬇</p>

            {activeIndex === i && (
              <div className="mt-4 text-sm text-gray-700 animate-fade-in">
                <p className="mb-1">{s.description}</p>
                <p className="font-semibold">Profesionales:</p>
                <ul>
                  {s.professionals.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
