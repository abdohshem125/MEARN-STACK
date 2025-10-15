import React, { useEffect, useRef, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movies.css";

function Movie() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState("all");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMoviesData(data.results);
      });

    searchRef.current?.focus();
  }, []);

  const searchRef = useRef(null);
  if (!moviesData) {
    return (
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  const searchMovies = moviesData.filter((mov) =>
    mov.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMovies =
    ratingFilter === "all"
      ? searchMovies
      : searchMovies.filter((mov) => mov.vote_average >= ratingFilter);

  return (
    <>
      <div className="page-wrapper">
        <h1 className="title">🎬 Movie Explorer</h1>

        <input
          ref={searchRef}
          className="search-input"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="filter-select"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        >
          <option value="all">All Ratings</option>
          <option value="9">9+</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
          <option value="6">6+</option>
          <option value="5">5+</option>
        </select>

        <MovieCard moviesData={filteredMovies} />
      </div>
    </>
  );
}

export default Movie;
