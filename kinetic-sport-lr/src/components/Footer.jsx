import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // falta mejorara el footer completo

  return (
    <footer className="relative bg-black  text-white">
      {/* SVG decorativo en la parte superior */}
      <svg
        className="absolute top-0 w-full h-8 -mt-5 sm:-mt-10 sm:h-16 text-[#000000]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1 720 0.7C960 1 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>

      <div className="relative z-10 px-6 py-12 max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-sm">
        {/* Contacto */}
        <div className="space-y-3 text-center md:text-left">
          <h4 className="text-lg font-bold text-indigo-300">Kinetic Sport LR</h4>
          <p>Ubicacion: Av. Alem 191, La Rioja - Argentina</p>
          <p>Whatsapp: 3804201334</p>
          <p>Instagram: @kineticSportLr</p>
        </div>

        {/* Navegación */}
        <div className="space-y-3 text-center md:text-left">
          <h4 className="text-lg font-bold text-indigo-300">Navegación</h4>
          <ul className="space-y-1">
            <li><a href="#inicio" className="hover:text-indigo-200">Inicio</a></li>
            <li><a href="#aboutme" className="hover:text-indigo-200">Sobre mí</a></li>
            <li><a href="#proyectos" className="hover:text-indigo-200">Proyectos</a></li>
            <li><a href="#certificados" className="hover:text-indigo-200">Certificados</a></li>
            <li><a href="#contacto" className="hover:text-indigo-200">Contacto</a></li>
          </ul>
        </div>

        {/* Redes y botón */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div>
            <h4 className="text-lg font-bold text-indigo-300 mb-2">Desarollo Web</h4>
            <div className="flex gap-5">
              {/* <p>@davidramirez_651</p> */}
              <a href="https://github.com/chavow5" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-indigo-200 transition" />
              </a>
              <a href="https://www.linkedin.com/in/david-ramirez-031015253/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-indigo-200 transition" />
              </a>
              <a href="https://www.instagram.com/davidramirez_651/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-indigo-200 transition" />
              </a>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200 transition"
          >
            <FaArrowUp /> Volver arriba
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-indigo-700 text-center py-4 text-xs text-gray-300">
        &copy; {new Date().getFullYear()} David Ramirez. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
