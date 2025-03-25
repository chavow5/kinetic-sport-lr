// import React from 'react'; //version +17  npm list react     
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo-title-container">
    <Link to="/">
      <img src="/image/Logo-kinetic.png" alt="logo" className="logo-kinetic" style={{ width: "100px", height: "auto" }} />
    </Link>
    <h2>
      <span className="kinetic">Kinetic  </span> <span className="sport"> Sport</span>
    </h2>
    </div>
    {/* <h3>Sistema de peaje manual</h3> */}
    <nav className='header-nav'>
      <Link to="/">Inicio</Link>
      {/* <Link to="/login">Login</Link> */}
      <Link to="/aboutus">Sobre Nosotros</Link>
      <Link to="/contacto">Contacto</Link>
      {/* <Link to="/viapass">ViaPass</Link> */}
      {/* <Link to="/sistemapeaje">Sistema Peaje</Link> */}

    </nav>
  </header>
);

export default Header;
