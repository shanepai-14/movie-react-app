import { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./component/MovieCard.jsx";

//7eaa6623d3beea74fe1a17c7d615eb46

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "7eaa6623d3beea74fe1a17c7d615eb46";
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/w600_and_h900_bestv2";
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchPopularMovies = async (searchTerm) => {
    const response = searchTerm
      ? await fetch(`${SEARCH_BASE_URL}${searchTerm}`)
      : await fetch(`${POPULAR_BASE_URL}`);

    const data = await response.json();

    console.log(data.results);
    setMovies(data.results);
  };
  useEffect(() => {
    searchPopularMovies();
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchPopularMovies(searchTerm)}
        ></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
