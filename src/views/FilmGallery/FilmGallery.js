import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { POSTER_URL } from '../../services/movies-api';
import s from './FilmGallery.module.css';
import defaultImg from '../FilmGallery/default.jpg'

function FilmGallery({ films }) {
  const { url } = useRouteMatch();

  return (
    <ul className={s.list}>
      {films.map(film => (
        <>
          
            <li key={film.id} className={s.item}>
              <Link to={`${url}/${film.id}`} className={s.link}>
              <img
                className={s.image}
                src={film.poster_path ? POSTER_URL + film.poster_path:defaultImg }
                  alt={film.title}
                  width="300"
                  height="450"
                />
                <p className={s.title}>{film.title}</p>
              </Link>
            </li>
          
        </>
      ))}
    </ul>
  );
}

FilmGallery.propTypes = {
  films: PropTypes.array.isRequired,
  
};



export default FilmGallery;
