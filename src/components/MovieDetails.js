import React from "react";
import PropTypes from "prop-types";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  const { poster_path, title, release_date, genres, vote_average, duration, overview } =
    movie;
  const genresString = genres.join(", ");

  return (
    <div className={styles.movieInfo}>
      <img src={poster_path} alt={title} className={styles.moviePoster} />
      <div>
        <div className={styles.movieTitle}>
          <h2>{title}</h2>
          <span className={styles.movieRating}>{vote_average}</span>
        </div>
        <div className={styles.movieGenre}>{genresString}</div>
        <div className={styles.movieDate}>
            <div>{release_date}</div>
            <div>{duration}</div>
        </div>
        <div className={styles.movieDescription}>{overview}</div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    duration: PropTypes.string,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default MovieDetails;
