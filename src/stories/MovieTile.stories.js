import React from "react";
import MovieTile from "../components/MovieTile";

export default {
  title: "MovieTile",
  component: MovieTile,
  argTypes: {
    onClick: { action: "clicked" },
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

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_FMjpg_UY508_.jpg",
    name: "Bohemian Rhapsody",
    releaseYear: 2018,
    genres: ["Drama", "Music"],
  },
};

export const Clickable = Template.bind({});
Clickable.args = {
  movie: {
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UY710_.jpg",
    name: "Kill Bill",
    releaseYear: 2004,
    genres: ["Action", "Adventure"],
  },
  onClick: () => alert("Movie clicked!"),
};

export const NoGenres = Template.bind({});
NoGenres.args = {
  movie: {
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTkxOTMyMDI0MV5BMl5BanBnXkFtZTcwODU0OTk1Mw@@._V1_FMjpg_UY700_.jpg",
    name: "Inception",
    releaseYear: 2010,
    genres: [],
  },
};
