import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './AppContext';

function Navbar() {
  const { state, dispatch } = useAppContext();
  const { theme } = state;

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/favs">Favoritos</Link></li>
      </ul>
      
      <button onClick={toggleTheme}>
        Cambiar Tema ({theme === 'light' ? 'Claro' : 'Oscuro'})
      </button>
    </nav>
  );
}

export default Navbar;
