import React, { useState } from "react";
import GenreLayout from "../../layouts/GenreLayout";
import GenreList from "../main/GenreList";
import MoviesSeries from "../../components/main/MoviesSeries";

import useFetch from "../../customs/useFetch";
import useFetchById from "../../customs/useFetchById";

function Genres({
  fetchGenre,
  fetchGenreById,
  fetchTrending,
  label = "items",
}) {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const { data, isLoading, isError, error } = useFetch(
    [`${label}-genres`],
    fetchGenre,
  );

  const trending = useFetch([`trending-${label}`], fetchTrending);

  const genreItems = useFetchById(
    selectedGenre,
    [`${label}-genre`, selectedGenre],
    fetchGenreById,
  );

  const activeData = selectedGenre ? genreItems : trending;

  return (
    <GenreLayout>
      <GenreList
        data={data}
        isError={isError}
        isLoading={isLoading}
        error={error}
        onSelectGenre={(id) => setSelectedGenre(id)}
      />

      <MoviesSeries
        data={activeData.data}
        isLoading={activeData.isLoading}
        isError={activeData.isError}
        error={activeData.error}
        label={label}
      />
    </GenreLayout>
  );
}

export default Genres;
