import React, { useState } from 'react';

function ContactForm() {
  const initialUsuarioState = { nombre: '', email: '', comentarios: '' };
  const [usuario, setUsuario] = useState(initialUsuarioState);
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (usuario.nombre.trim().length < 6 || usuario.nombre !== usuario.nombre.trim()) {
      showError('El nombre debe tener al menos 6 caracteres y no debe contener espacios al final.');
    } else if (!isValidEmail(usuario.email)) {
      showError('El email ingresado no es válido.');
    } else {
      showSuccess(`Gracias ${usuario.nombre}, te contactaremos cuanto antes vía email.`);
      clearForm();
    }
  };

  const isValidEmail = (email) => {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  };

  const showError = (errorMsg) => {
    setMensaje(errorMsg);
    setError(true);
  };

  const showSuccess = (successMsg) => {
    setMensaje(successMsg);
    setError(false);
  };

  const clearForm = () => {
    setUsuario(initialUsuarioState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formContact">
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre completo"
          value={usuario.nombre}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={usuario.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          rows={10}
          cols={30}
          id="comentarios"
          name="comentarios"
          placeholder="Comentarios"
          value={usuario.comentarios}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <button className="enviar" type="submit">
          Enviar
        </button>
      </div>

      <div className="textoErrExit">
        {mensaje && <h4 className={error ? "msmerror" : "msmexito"}>{mensaje}</h4>}
      </div>
    </form>
  );
}

export default ContactForm;
