import React from "react";
//import Counter from "./components/Counter";
import { MovieListPage } from "./components/MovieListPage";

import "./App.css";

function App() {

  return (
    <div className="App">
      {/* <Counter initialValue={0} /> */}
      <MovieListPage></MovieListPage>
    </div>
  );
}

export default App;
