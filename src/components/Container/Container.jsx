import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import List from "../List/List";
import Search from "../Search/Search";
import axios from "axios";

function Container({ setBasketActive, basket, setBasket }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const [movies, setMovies] = useState([]);
  const [list, setList] = useState([]);
  const url = `https://api.themoviedb.org/3/discover/movie`;
  const searchUrl =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US";

  const getSearch = (search) => {
    setSearchParams(search);
    axios
      .get(search === "" ? url : `${searchUrl}&query=${search}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjhhNGRlNDRkYjliZWJkODNiMmMzYzFjY2IzODZkMCIsIm5iZiI6MTczNDU1NDEzOS42MTEsInN1YiI6IjY3NjMzMjFiMGU5ZGMzMjgyY2FhZWVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VzfMGSGs6jIJzcffqVOB-OjubhWUomVwARgiYI17S8w",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      });
  };

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjhhNGRlNDRkYjliZWJkODNiMmMzYzFjY2IzODZkMCIsIm5iZiI6MTczNDU1NDEzOS42MTEsInN1YiI6IjY3NjMzMjFiMGU5ZGMzMjgyY2FhZWVhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VzfMGSGs6jIJzcffqVOB-OjubhWUomVwARgiYI17S8w",
          Accept: "application/json",
        },
      })
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="container">
      <div className="container-left">
        <Search
          movies={movies}
          getData={getSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="container-cards">
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchParams.toLowerCase())
            )
            .map((movie) => (
              <Card
                basket={basket}
                key={movie.id}
                movie={movie}
                setList={setList}
                list={list}
              />
            ))}
        </div>
      </div>
      <div className="container-right">
        <List
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
          list={list}
          setList={setList}
        />
      </div>
    </div>
  );
}

export default Container;
