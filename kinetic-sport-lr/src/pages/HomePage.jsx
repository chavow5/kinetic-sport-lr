import React from 'react'; // React versión 17+
import '../css/Homepage.css';

const HomePage = () => (
  <div className="homepage">
    {/* Hero Section */}
    <section className="hero">
      <h1>Kinetic Sport LR</h1>
      <p>Tu salud, nuestra prioridad en movimiento.</p>
    </section>

    {/* About Us Section */}
    <section id="about-us" className="about-us">
      <h2>About Us</h2>
      <p>En Kinetic Sport LR, ofrecemos tratamientos personalizados para mejorar tu bienestar físico. Nuestro equipo de profesionales está comprometido con tu recuperación y rendimiento deportivo.</p>
    </section>

    {/* Servicios Section */}
    <section id="servicios" className="servicios">
      <h2>Servicios</h2>
      <ul>
        <li>Rehabilitación Física</li>
        <li>Masajes Deportivos</li>
        <li>Terapia Ocupacional</li>
        <li>Asesoramiento Postural</li>
      </ul>
    </section>

    {/* Ubicación Section */}
<section id="ubicacion" className="ubicacion">
  <h2>Ubicación y Horarios</h2>
  <p>Dirección: Avenida Leandro N. Alem 191, F5302 La Rioja</p>
  <p>Horarios: Lunes a Viernes, 16:30 PM - 22:00 PM</p>
  <div className="mapa">
    {/* Embebido de un mapa de Google */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.123456789!2d-66.865123456!3d-29.412345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sAvenida+Leandro+N.+Alem+191%2C+F5302+La+Rioja!5e0!3m2!1ses-419!2sar!4v1234567890123"
      title="Mapa Kinetic Sport LR"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>


    {/* Instagram Section */}
    <section id="instagram" className="instagram">
      <h2>Instagram</h2>
      <p>Síguenos en Instagram para más actualizaciones:</p>
      <a href="https://instagram.com/kineticsportlr" target="_blank" rel="noopener noreferrer">@kineticsportlr</a>
    </section>

    {/* Contacto Section */}
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      <p>Teléfono: +54 380 123 4567</p>
      <p>Email: info@kineticsportlr.com</p>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  </div>
);

export default HomePage;
