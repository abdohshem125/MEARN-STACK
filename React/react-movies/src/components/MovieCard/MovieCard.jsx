import React, { useState } from "react";
import "./movieCard.css";

function MovieCard({ moviesData }) {
  const [Counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter((inc) => inc + 1);
  };
  const decCounter = () => {
    setCounter((dec) => dec - 1);
  };

  return (
    <>
      <div className="movies-grid">
        {moviesData.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              className="movie-img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-info">⭐ {movie.vote_average}</p>
            <p className="movie-info">📅 {movie.release_date}</p>

            <div className="counter-wrapper">
              <button className="btn" onClick={incCounter}>
                +
              </button>
              <span className="counter-value">{Counter}</span>
              <button className="btn" onClick={decCounter}>
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieCard;
