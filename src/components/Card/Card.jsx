import React from "react";

function Card({ movie, setList, basket }) {
  return (
    <div className="movie-card">
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
        alt="Poster"
      />
      <div className="card-content">
        <div className="card-texts">
          <span>{movie.release_date.slice(0, 4)}</span>
          <p>{movie.title}</p>
        </div>
        <div className="card-buttons">
          <button
            onClick={() =>
              setList((prev) => {
                if (
                  !prev.some((item) => item.id === movie.id) &&
                  basket.length === 0
                ) {
                  return [...prev, movie];
                } else {
                  alert("Already at the list");
                  return prev;
                }
              })
            }
          >
            Əlavə et
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
