import React from "react";
import PropTypes from "prop-types";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  const { imageUrl, name, releaseYear, genres, rating, duration, description } =
    movie;
  const genresString = genres.join(", ");

  return (
    <div className={styles.movieInfo}>
      <img src={imageUrl} alt={name} className={styles.moviePoster} />
      <div>
        <div className={styles.movieTitle}>
          <h2>{name}</h2>
          <span className={styles.movieRating}>{rating}</span>
        </div>
        <div className={styles.movieGenre}>{genresString}</div>
        <div className={styles.movieDate}>
            <div>{releaseYear}</div>
            <div>{duration}</div>
        </div>
        <div className={styles.movieDescription}>{description}</div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    duration: PropTypes.string,
    description: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovieDetails;
