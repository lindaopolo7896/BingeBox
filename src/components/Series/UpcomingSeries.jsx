import React from "react";
import MoviesSeries from "../main/MoviesSeries";
import useFetch from "../../customs/useFetch";
import { fetchUpcomingSeries } from "../../apis/Movies";
function UpcomingSeries() {
  return (
    <MoviesSeries
      hook={() => useFetch(["upcoming-series"], fetchUpcomingSeries)}
      titleKey="name"
      dateKey="first_air_date"
      label="series"
    />
  );
}

export default UpcomingSeries;
