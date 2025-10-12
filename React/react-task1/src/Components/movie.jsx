import React from "react";
import "../styles/movies.css";

export default function Movie(props) {
  return (
    <>
      <div className="movie-card">
        <img src={props.imgurl} alt="" />
        <h1>{props.name}</h1>
        <p>{props.descreption}</p>
        <div>
          <button>View Details</button>
        </div>
      </div>
    </>
  );
}
