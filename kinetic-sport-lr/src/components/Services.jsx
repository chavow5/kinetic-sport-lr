const services = [
  { name: "Rehabilitación deportiva", icon: "🏋️" },
  { name: "Masoterapia", icon: "💆" },
  { name: "RPG", icon: "🧘" },
  { name: "Electroterapia", icon: "⚡" },
];

const Services = () => {
  return (
    <section id="servicios" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
        {services.map((s, i) => (
          <div key={i} className="p-4 bg-white shadow rounded">
            <div className="text-4xl mb-2">{s.icon}</div>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
