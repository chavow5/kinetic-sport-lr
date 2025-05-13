const Hero = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Kinetic
            <span className="dark:text-blue-900"> Sport </span> LR
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Centro médico, rehabilitación, nutrición y entrenamiento deportivo.
            <br className="hidden md:inline lg:hidden" /> kinesiologia, medicina
            deportiva, nutrición y entrenamiento personalizado.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-900 dark:text-gray-50"
            >
              Solicitar Turno
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Contactar
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-64 xl:h-72 2xl:h-80">
          <img
            src="./banner5.png"
            alt="banner.jpg"
            className="object-contain h-64 sm:h-80 lg:h-[20rem] xl:h-[24rem] 2xl:h-[28rem] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
