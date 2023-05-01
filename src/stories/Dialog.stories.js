import React from "react";
import Dialog from "../components/Dialog";
import MovieForm from "../components/MovieForm";

export default {
  title: "Dialog",
  component: Dialog,
};

export const AddMovie = () => (
  <Dialog isOpen onClose={() => console.log("closed")} title="Add movie">
    <MovieForm onSubmit={(formData) => console.log(formData)} />
  </Dialog>
);

export const EditMovie = () => (
  <Dialog isOpen onClose={() => console.log("closed")} title="Edit movie">
    <MovieForm
      initialMovieInfo={{
        title: "The Shawshank Redemption",
        releaseDate: "1994-09-22",
        movieUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco",
        rating: 9.3,
        genre: "Drama",
        runtime: "2h 22m",
        description: "Two imprisoned men bond over a number of years...",
      }}
      onSubmit={(formData) => console.log(formData)}
    />
  </Dialog>
);

export const DeleteMovie = () => (
  <Dialog isOpen onClose={() => console.log("closed")} title="Delete movie">
    <p>Are you sure you want to delete this movie?</p>
    <button>Confirm</button>
  </Dialog>
);
