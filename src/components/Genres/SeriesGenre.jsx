import React from "react";
import GenreLayout from "../../layouts/GenreLayout";
import GenreList from "../main/GenreList";
import { fetchSerieGenre } from "../../apis/Movies";
import useFetch from "../../customs/useFetch";

function SeriesGenre() {
  return (
    <GenreLayout>
      <h1 className="text-[#D1D5DB]">Series:</h1>
      <GenreList hook={() => useFetch(["series-genres"], fetchSerieGenre)} />
    </GenreLayout>
  );
}

export default SeriesGenre;
