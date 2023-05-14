import React from "react";
import MovieDetails from "../components/MovieDetails";


export default {
  title: "MovieDetails",
  component: MovieDetails,
  args: {
    movie: {
      poster_path: "https://m.media-amazon.com/images/M/MV5BYTE2NDI0ZjgtZmI2Ni00NDI4LTgwZTctN2I3OWIzNjhhYjY1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      name: "Reservoir Dogs",
      rating: 4.5,
      duration: "1h 30m",
      description: "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      release_date: 1992,
      genres: ["Action", "Adventure"],
    },
  },
  parameters: {
    backgrounds: {
      default: "custom",
      values: [
        {
          name: "custom",
          value: "#232323",
        },
      ],
    },
  },
};

export const Default = ({ movie }) => <MovieDetails movie={movie} />;

export const BigDescription = ({ movie }) => (
    <MovieDetails movie={{ ...movie, description: "Six thugs, who are strangers to each other, are hired by a crime boss, Joe Cabot, to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they won't get too close and will concentrate on the job instead. They are completely sure that the robbery is going to be a success. But, when the police show up right at the time and the site of the robbery, panic spreads amongst the group members, and two of them are killed in the subsequent shootout, along with a few policemen and civilians. When the remaining people assemble at the premeditated rendezvous point (a warehouse), they begin to suspect that one of them is an undercover cop." }} />
);

export const LongTitle = ({ movie }) => (
  <MovieDetails movie={{ ...movie, poster_path: 'https://m.media-amazon.com/images/M/MV5BMTY2NDI2MTc2NV5BMl5BanBnXkFtZTcwNjA2NTQzMw@@._V1_FMjpg_UY2048_.jpg', name: 'The Assassination of Jesse James by the Coward Robert Ford' }} />
);
