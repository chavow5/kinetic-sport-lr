const Hero = () => {
  return (
    <section
      className="h-[70vh] sm:h-screen bg-cover bg-center relative flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/banner3.png')",backgroundPosition: "left top" } }
    >
      {/* <div className="bg-black bg-opacity-50 p-6 rounded-xl text-white max-w-md mx-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">KINETIC <span className="block">SPORT LR</span></h1>
        <p className="mb-4 text-sm sm:text-base italic">
          Centro médico, rehabilitación, <br />
          nutrición y entrenamiento deportivo.
        </p>
        
      </div> */}
      <div><a
          href="#contacto"
          className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300 ease-in-out absolute bottom-12 sm:bottom-20 left-40 sm:right-"
          style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.7)" }}
        >
          SOLICITAR TURNO
        </a></div>
    </section>
  );
};

export default Hero;

