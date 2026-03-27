import React from "react";
import MinNav from "../../layouts/MinNav";
import CardDisplay from "./CardDisplay";

function MoviesSeries({ hook }) {
  const { data, isLoading, isError, error } = hook();

  if (isLoading) {
    return <p>Fetching movies...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const movies = data?.results || [];

  return (
    <MinNav>
      {movies.map((movie) => (
        <CardDisplay
          key={movie?.id}
          image={movie?.backdrop_path}
          title={movie?.title}
          release={movie?.release_date}
        />
      ))}
    </MinNav>
  );
}
export default MoviesSeries;
