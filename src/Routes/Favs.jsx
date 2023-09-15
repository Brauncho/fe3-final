import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './AppContext';

function Favorites() {
  
  const { state } = useAppContext();
  const { apiData, favorites } = state;

  {/*  use chat gpt para esta */}
  const favoriteDentists = apiData.filter((dentist) => favorites.includes(dentist.id));

  return (
    <div>
      <h1>Dentistas Favoritos</h1>
      {favoriteDentists.map((dentist) => (
        <div key={dentist.id}>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      ))}

      
      <Link to="/home">Volver a la página de inicio</Link>
    </div>
  );
}

export default Favs;

