import React from "react";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/w600_and_h900_bestv2";
const MovieCard = ({ movie}) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.release_date}</p>
      </div>
      <div>
        <img
          src={
            movie.poster_path !== "N/A" 
              ? IMAGE_BASE_URL + movie.poster_path
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        ></img>
      </div>
      <div>
        <span>Movie</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
