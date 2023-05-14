import React from "react";
import PropTypes from "prop-types";
import styles from "./MovieTile.module.css";

const MovieTile = ({ movie, onClick }) => {
  const { poster_path, title, release_date, genres } = movie;
  const genresString = genres.join(', ');

  return (
    <div className={styles.movieTile} onClick={() => onClick(movie)}>
      <img src={poster_path} alt={title} />
      <div className={styles["movie-details"]}>
          <div>
            <div className={styles["movie-title"]}>{title}</div>
            <div className={styles["movie-genres"]}>
                  {genresString}
            </div>
          </div>
          <div className={styles["movie-year"]}>{release_date.split('-')[0]}</div>


      </div>
    </div>
  );
};

MovieTile.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieTile;
