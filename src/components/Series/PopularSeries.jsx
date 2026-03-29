import React from "react";
import useFetch from "../../customs/useFetch";
import MoviesSeries from "../main/MoviesSeries";
import { fetchPopularSeries } from "../../apis/Movies";

function PopularSeries() {
  return (
    <MoviesSeries
      hook={() => useFetch(["popular-series"], fetchPopularSeries)}
      titleKey="name"
      dateKey="first_air_date"
      label="series"
    />
  );
}

export default PopularSeries;
