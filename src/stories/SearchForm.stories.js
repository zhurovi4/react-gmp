import SearchForm from "../components/SearchForm";

export default {
  title: "SearchForm",
  component: SearchForm,
};

export const Default = () => <SearchForm />;

export const WithInitialQuery = () => (
  <SearchForm
    initialQuery="What do you want to watch?"
    onSearch={(query) => {
      console.log(`Searching for ${query}`);
    }}
  />
);

export const WithSearchHandler = () => (
  <SearchForm
    onSearch={(query) => {
      console.log(`Searching for ${query}`);
    }}
  />
);
