import React from "react";
import GenreLayout from "../../layouts/GenreLayout";
import GenreList from "../main/GenreList";
import {
  fetchSerieGenre,
  fetchSeriesGenreById,
  fetchTrendingSeries,
} from "../../apis/Movies";
import Genres from "./Genres";

function SeriesGenre() {
  return (
    <Genres
      title="Series"
      label="series"
      fetchGenres={fetchSerieGenre}
      fetchTrending={fetchTrendingSeries}
      fetchByGenre={fetchSeriesGenreById}
    />
  );
}

export default SeriesGenre;
