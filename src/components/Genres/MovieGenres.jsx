import React from "react";
import GenreLayout from "../../layouts/GenreLayout";
import GenreList from "../main/GenreList";
import {
  fetchMovieGenre,
  fetchMovieGenreById,
  fetchTrendingMovies,
} from "../../apis/Movies";
import useFetch from "../../customs/useFetch";
import { useState } from "react";
import useFetchById from "../../customs/useFetchById";
import MoviesSeries from "../../components/main/MoviesSeries";
function MovieGenres() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const moviesHook = () =>
    selectedGenre
      ? useFetchById(
          selectedGenre,
          ["movie-gen", selectedGenre],
          fetchMovieGenreById,
        )
      : useFetch(["trending-movies"], fetchTrendingMovies);
  return (
    <GenreLayout>
      <h1 className="text-[#D1D5DB]">Movies:</h1>

      <GenreList
        hook={() => useFetch(["movie-genres"], fetchMovieGenre)}
        onSelectGenre={(id) => setSelectedGenre(id)}
      />

      <MoviesSeries hook={moviesHook} label="movies" />
    </GenreLayout>
  );
}

export default MovieGenres;
