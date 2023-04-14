import GenreList from "../components/GengeList";

export default {
  title: "GenreList",
  component: GenreList,
};

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance"];

const selectedGenre = "Action";

export const Basic = () => (
  <GenreList
    genres={genres}
    selectedGenre={selectedGenre}
    onSelect={(genre) => console.log(`Selected genre: ${genre}`)}
  />
);

export const AlternateStyling = () => (
    <GenreList
      genres={genres}
      selectedGenre={'Horror'}
      onSelect={(genre) => console.log(`Selected genre: ${genre}`)}
      style={{ backgroundColor: 'black', color: 'white' }}
    />
  );
