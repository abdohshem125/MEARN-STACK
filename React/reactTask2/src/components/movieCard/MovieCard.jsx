import React from "react";
import "../../style/moviesCard.css";

export default function MovieCard({ movieTitle, moviePoster }) {
  return (
    <>
      <div className="movie-card">
        <img src={"https://image.tmdb.org/t/p/w500/" + moviePoster} />
        <h2>{movieTitle}</h2>
        <div>
          <button>View Details</button>
        </div>
      </div>
    </>
  );
}
