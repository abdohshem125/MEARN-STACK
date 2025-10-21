import { Component, PureComponent } from "react";
import MovieCard from "../movieCard/MovieCard";
import "../../style/moviesClass.css";

class MovieList extends PureComponent {
  constructor() {
    super();
    this.state = {
      movies: null,
    };
    console.log("constructor run");
  }

  componentDidMount() {
    console.log("componentDidMount run");
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.results }));
  }

  render() {
    console.log("render run");

    if (!this.state.movies) {
      return <h1>loooooooooodinggg</h1>;
    }

    // const firstMovie = this.state.movies.results[0];

    return (
      <>
        {/* <div>
          <img
            src={"https://image.tmdb.org/t/p/w500/" + firstMovie.poster_path}
          />
          {firstMovie.title}
        </div> */}

        <div className="movie-wrap">
          {this.state.movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movieTitle={movie.title}
              moviePoster={movie.poster_path}
            />
          ))}
        </div>
      </>
    );
  }
}

export default MovieList;
