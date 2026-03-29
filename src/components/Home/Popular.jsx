import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import MinNav from "../../layouts/MinNav";
import CardDisplay from "../main/CardDisplay";
import MoviesSeries from "../main/MoviesSeries";
import useFetch from "../../customs/useFetch";
import { fetchAllPopular } from "../../apis/Movies";

function Popular() {
  const { data, isLoading, isError, error } = useFetch(
    ["popular"],
    fetchAllPopular,
  );
  return (
    <MoviesSeries
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      label="Popular"
    />
  );
}

export default Popular;
