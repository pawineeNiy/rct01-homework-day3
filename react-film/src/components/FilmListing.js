import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  state = {
    filter: "all"
  };

  handleFilterClick = filter => {
    console.log(`Setting filter to ${filter}`);
    this.setState({ filter });
  };

  render() {
    let {films, faves} = this.props
    const allFilms = (this.state.filter === "all"
      ? films
      : faves
    ).map(filmItem => (
      <FilmRow
        key={filmItem.id}
        film={filmItem}
        isFave={faves.includes(filmItem)}
        onFaveToggle={() => this.props.onFaveToggle(filmItem)}
        handleDetailsClick={() => this.props.handleDetailsClick(filmItem)}
      />
    ));

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={
              "film-list-filter " +
              (this.state.filter === "all" ? "is-active" : "")
            }
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={
              "film-list-filter " +
              (this.state.filter === "faves" ? "is-active" : "")
            }
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
