import React from "react";
import PropTypes from "prop-types";
import styles from "./MovieTile.module.css";

const MovieTile = ({ movie, onClick }) => {
  const { imageUrl, name, releaseYear, genres } = movie;
  const genresString = genres.join(', ');

  return (
    <div className={styles.movieTile} onClick={() => onClick(movie)}>
      <img src={imageUrl} alt={name} />
      <div className={styles["movie-details"]}>
          <div>
            <div className={styles["movie-title"]}>{name}</div>
            <div className={styles["movie-genres"]}>
                  {genresString}
            </div>
          </div>
          <div className={styles["movie-year"]}>{releaseYear}</div>


      </div>
    </div>
  );
};

MovieTile.propTypes = {
  movie: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieTile;
