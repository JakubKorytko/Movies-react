import '../css/App.css';
import Movie from "./Movie"
import movies from "../movies.json";

import React, { Component } from 'react';

class App extends Component {
  render() {
    var moviesComponents = movies.map((x,y) => { return <Movie key={y} image={"/moviesGfx/" + x.image} name={x.name} /> })
    return (
      <div className="App">
        <div id="movies">
          {moviesComponents}
        </div>
      </div>
    );
  }
}

export default App;