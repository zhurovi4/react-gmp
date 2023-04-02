import React from "react";
class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchQuery: props.initialQuery || "",
      };
    }
  
    handleInputChange = (event) => {
      this.setState({ searchQuery: event.target.value });
    };
  
    handleSearchClick = () => {
      this.props.onSearch(this.state.searchQuery);
    };
  
    handleKeyPress = (event) => {
      if (event.key === "Enter") {
        this.props.onSearch(this.state.searchQuery);
      }
    };
  
    render() {
      return React.createElement(
        "div",
        {className: "searchForm"},
        React.createElement("input", {
          type: "text",
          className: "searchInput",
          value: this.state.searchQuery,
          onChange: this.handleInputChange,
          onKeyPress: this.handleKeyPress,
        }),
        React.createElement("button", { onClick: this.handleSearchClick, className: "searchButton" }, "Search")
      );
    }
  }

  export default SearchForm;
  