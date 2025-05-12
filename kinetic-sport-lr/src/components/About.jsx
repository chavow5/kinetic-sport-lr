const About = () => {
  return (
    <section id="nosotros" className="py-12 bg-gray-100 text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
      <p className="max-w-2xl mx-auto text-gray-700">
        Somos un equipo profesional de kinesiólogos especializados en rehabilitación deportiva y postural. Trabajamos con vocación, tecnología y compromiso con tu salud.
      </p>
      <div className="max-w-3xl mx-auto mt-8 text-gray-700 text-left">
        <h3 className="text-2xl font-semibold mb-2">Historia y Evolución de la Kinesiología</h3>
        <p>
          La Kinesiología, tal como la conocemos hoy, tiene sus raíces en la antigua práctica de la medicina gimnástica y la kinesioterapia, pero se formalizó como disciplina científica y profesional en el siglo XX. La Escuela de Kinesiología de la Universidad de Buenos Aires fue fundada en 1937, marcando un hito en la historia de la kinesiología en Argentina.
        </p>
        <ul className="list-disc pl-5 my-4">
          <li>
            <strong>Orígenes:</strong> La kinesiología, en su forma más antigua, se basaba en la observación y el estudio del movimiento humano para comprender y tratar problemas de salud.
          </li>
          <li>
            <strong>Desarrollo en Suecia:</strong> En Suecia, la medicina gimnástica y la kinesioterapia se desarrollaron durante más de 100 años, desde 1813, sentando las bases para la disciplina moderna.
          </li>
          <li>
            <strong>Formalización de la disciplina:</strong> En 1937, se creó la primera escuela de Kinesiología en el ámbito universitario, en la Universidad de Buenos Aires, bajo la iniciativa del Dr. Octavio Fernández.
          </li>
          <li>
            <strong>Reconocimiento oficial:</strong> El 13 de abril de 1950, mediante el Decreto 8648, se reconoce oficialmente la Kinesiología como disciplina profesional.
          </li>
          <li>
            <strong>George Goodheart:</strong> En 1964, el quiropráctico estadounidense George Goodheart desarrolló una técnica específica de masaje para aumentar la fuerza muscular, lo que sentó las bases de la kinesiología tal como la conocemos hoy.
          </li>
        </ul>
        <h4 className="text-xl font-semibold mb-1">La kinesiología en la actualidad</h4>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Estudio del movimiento humano:</strong> La kinesiología es una ciencia que estudia la funcionalidad y la calidad del movimiento humano, con el objetivo de prevenir, rehabilitar y mejorar la salud.
          </li>
          <li>
            <strong>Aplicaciones:</strong> La kinesiología se aplica en diversas áreas, incluyendo la rehabilitación de lesiones, el tratamiento de enfermedades crónicas, la prevención de lesiones deportivas y la mejora de la calidad de vida.
          </li>
          <li>
            <strong>En La Rioja:</strong> En La Rioja, la kinesiología es una disciplina importante para la salud pública, con profesionales que brindan atención a pacientes de todas las edades y con diversas necesidades.
          </li>
        </ul>
        <p>
          En resumen, la kinesiología ha evolucionado desde sus orígenes en la medicina gimnástica y la kinesioterapia hasta convertirse en una disciplina científica y profesional que contribuye a la salud y el bienestar de la población.
        </p>
      </div>
    </section>
  );
};

export default About;
