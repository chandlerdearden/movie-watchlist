import React from "react";

const MovieCard = ({ movie, addMovie, removeMovie, list }) => {
  const inWatchList = list.filter((movies) => {
    return movies.id === movie.id;
  });
  const button =
    inWatchList.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add To List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  return (
    <div>
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
