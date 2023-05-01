import React from "react";
import styles from "./MovieForm.module.css";

function MovieForm({ initialMovieInfo = {}, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.movieForm}>
      <div className={styles.formRow}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            defaultValue={initialMovieInfo.title}
          />
        </label>
        <label>
          Release Date:
          <input
            type="date"
            name="releaseDate"
            defaultValue={initialMovieInfo.releaseDate}
          />
        </label>
      </div>
      <div className={styles.formRow}>
        <label>
          Movie URL:
          <input
            type="text"
            name="movieUrl"
            defaultValue={initialMovieInfo.movieUrl}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            defaultValue={initialMovieInfo.rating}
          />
        </label>
      </div>
      <div className={styles.formRow}>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            defaultValue={initialMovieInfo.genre}
          />
        </label>
        <label>
          Runtime:
          <input
            type="text"
            name="runtime"
            defaultValue={initialMovieInfo.runtime}
          />
        </label>
      </div>
      <div className={styles.formRow}>
        <textarea
          placeholder="Movie description"
          id="movie-description"
          cols="100"
          rows="10"
          defaultValue={initialMovieInfo.description}
        ></textarea>
      </div>
      <div className={styles.buttonsRow}>
      <button className={styles.resetBtn}>Reset</button>
      <button className={styles.submitBtn} type="submit">Save</button>
      </div>
    </form>
  );
}

export default MovieForm;
