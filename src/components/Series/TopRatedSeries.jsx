import React from "react";
import MoviesSeries from "../main/MoviesSeries";
import { fetchTopRatedSeries } from "../../apis/Movies";
import useFetch from "../../customs/useFetch";

function TopRatedSeries() {
  return (
    <MoviesSeries
      hook={() => useFetch(["top-rated-series"], fetchTopRatedSeries)}
      titleKey="name"
      dateKey="first_air_date"
      label="series"
    />
  );
}

export default TopRatedSeries;
