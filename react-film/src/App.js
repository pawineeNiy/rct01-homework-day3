import React, { Component } from "react";
import TMDB from "./TMDB";
import FilmListing from "./components/FilmListing";
import FilmDetails from "./components/FilmDetails";
import "./App.css";

const { films } = TMDB;

class App extends Component {
  state = {
    films: films,
    faves: [],
    current: []
  };

  handleFaveToggle = film => {
    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film);
    if (filmIndex === -1) {
      faves.push(film);
    } else {
      faves.splice(filmIndex, 1);
    }
    this.setState({ faves });
  };

  handleDetailsClick = film => {
    console.log(`Fetching detail for ${film.title}`);
    const current = [...this.state.current];
    const filmIndex = current.indexOf(film);
    if (filmIndex === -1) {
      current.push(film.title);
    } else {
      current.splice(filmIndex, 1);
    }
    this.setState({ current });
  };

  render() {
    const { films, faves, current } = this.state;
    return (
      <div className="film-library">
        <FilmListing
          films={films}
          faves={faves}
          onFaveToggle={this.handleFaveToggle}
          handleDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails films={current} />
      </div>
    );
  }
}

export default App;
