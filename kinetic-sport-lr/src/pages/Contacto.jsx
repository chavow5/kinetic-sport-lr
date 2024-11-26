// import React from 'react'; //version +17  npm list react     

const Contacto = () => (
  <div className="contacto">
    <h2 className="contacto-title">Contacto</h2>
    
    <section className="contacto-info">
      <p className="contacto-description">
        Queremos saber de ti! Ya sea para hablar sobre nuestro proyecto, la universidad, o simplemente conocer quiénes somos.
      </p>
    </section>
    
    <section className="contacto-details">
      <h3 className="contacto-subtitle">Equipo de ViaPass</h3>
      <ul className="contacto-team-list">
        <ul className="contacto-team-member">
        <strong>David Ramírez</strong> - Telefono: <br />
        <strong>David Ramírez</strong> - Telefono: <br />
        <strong>David Ramírez</strong> - Telefono: <br />
        <strong>David Ramírez</strong> - Telefono: <br />
        
        </ul>
      </ul>
    </section>
    
    {/* Formulario de contacto  - en caso de tener tiempo usar envio de email  */}
    <section className="contacto-form-section">
      <h3 className="contacto-subtitle">Envíanos un mensaje</h3>
      <form className="contacto-form">
        <label className="contacto-form-label">
          Nombre y Apellido:
          <input type="text" name="name" className="contacto-form-input" placeholder="Tu nombre completo" required />
        </label>
        
        <label className="contacto-form-label">
          Correo electrónico:
          <input type="email" name="email" className="contacto-form-input" placeholder="Tu correo" required />
        </label>
        
        <label className="contacto-form-label">
          Mensaje:
          <textarea name="message" className="contacto-form-textarea" placeholder="Escribe tu mensaje" required />
        </label>
        
        <button type="submit" className="contacto-form-button">Enviar</button>
      </form>
    </section>
    
  </div>
);

export default Contacto;
