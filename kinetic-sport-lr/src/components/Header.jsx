import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos 
import logo from "../assets/logo-kinetic.png"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-blue-950 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 mr-2" />
          {/* <span className="text-xl font-semibold">CHAVO</span> */}
        </div>

        {/* Navegacion */}
        <nav className="hidden md:flex space-x-6 ">
          <a href="#" className="block hover:text-gray-300">Inicio</a>
          <a href="#nosotros" className="block hover:text-gray-300">Sobre Nosotros</a>
          <a href="#Equipo" className="block hover:text-gray-300">Equipo</a>
          <a href="#servicios" className="block hover:text-gray-300">Servicios</a>
          <a href="#turnos" className="block hover:text-gray-300">Turnos</a>
          <a href="#contacto" className="block hover:text-gray-300">Contacto</a>
        </nav>

        {/* Botón hamburguesa*/}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navegacion celular  */}
      {menuOpen && (
        <div className="md:hidden text-center bg-blue-950 px-4 pb-4 space-y-2">
          <a href="#" className="block hover:text-gray-300">Inicio</a>
          <a href="#nosotros" className="block hover:text-gray-300">Sobre Nosotros</a>
          <a href="#Equipo" className="block hover:text-gray-300">Equipo</a>
          <a href="#servicios" className="block hover:text-gray-300">Servicios</a>
          <a href="#turnos" className="block hover:text-gray-300">Turnos</a>
          <a href="#contacto" className="block hover:text-gray-300">Contacto</a>
          <button onClick={toggleMenu} className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full w-full">Cerrar</button>
        </div>
      )}
    </header>
  );
};

export default Header;
