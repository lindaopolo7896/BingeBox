import React from "react";
import MinNav from "../../layouts/MinNav";
import CardDisplay from "../main/CardDisplay";
import MoviesSeries from "../main/MoviesSeries";
import useFetch from "../../customs/useFetch";
import { fetchAllTopRated } from "../../apis/Movies";

function TopRated() {
  const { data, isLoading, error, isError } = useFetch(
    ["top-rated"],
    fetchAllTopRated,
  );
  return (
    <MoviesSeries
      data={data}
      isError={isError}
      error={error}
      isLoading={isLoading}
      label="top rated"
    />
  );
}

export default TopRated;
