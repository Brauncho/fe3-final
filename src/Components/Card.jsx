import { Link } from 'react-router-dom';
import { useDentistaStates } from '../Context/Context';
import DC from '../img/doctor.jpg';

const Card = ({ dentista }) => {
  const { state, dispatch } = useDentistaStates();
  const findDentista = state.favs.find((fav) => fav.id === dentista.id);

  const addFav = () => {
    if (findDentista) {
      dispatch({ type: 'DELETE_FAV', payload: findDentista });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentista });
    }
  };

  return (
    <div className="card">
      <Link to={'/detail/' + dentista.id}>
        <img src={DC} alt="foto" />
      </Link>
      <div className="texCard">
        <h2>{dentista.name}</h2>
        <h3>{dentista.username}</h3>
      </div>
 
    </div>
  );
};

export default Card;
