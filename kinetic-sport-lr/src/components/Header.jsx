import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white shadow-md">
    <div className="container mx-auto flex items-center justify-between p-4">
      {/* Logo y título */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src="/image/Logo-kinetic.png"
            alt="logo"
            className="w-16 h-auto"
          />
        </Link>
        <h2 className="text-2xl font-bold">
          <span className="text-yellow-300">Kinetic</span>{' '}
          <span className="text-white">Sport</span>
        </h2>
      </div>

      {/* Navegación */}
      <nav className="flex space-x-6">
        <Link
          to="/"
          className="hover:text-yellow-300 transition duration-300"
        >
          Inicio
        </Link>
        <Link
          to="/aboutus"
          className="hover:text-yellow-300 transition duration-300"
        >
          Sobre Nosotros
        </Link>
        <Link
          to="/contacto"
          className="hover:text-yellow-300 transition duration-300"
        >
          Contacto
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;