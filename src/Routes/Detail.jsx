import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './AppContext';

function DentistDetail({ match }) {
  const { state, dispatch } = useAppContext();
  const { apiData, favorites } = state;
  const dentistId = match.params.id;
  const dentist = apiData.find((dentist) => dentist.id === dentistId);
  const isFavorite = favorites.includes(dentistId);

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: dentistId });
    }
  };

  return (
    <div>
      <h1>Dentist Detail</h1>
      <h2>{dentist.name}</h2>
      <p>Email: {dentist.email}</p>
      <p>Teléfono: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
      <button onClick={handleAddToFavorites}>
        {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </button>
      <Link to="/home">Volver a la página de inicio</Link>
    </div>
  );
}



export default Detail;