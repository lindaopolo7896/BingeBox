import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import MinNav from "../../layouts/MinNav";
import CardDisplay from "../main/CardDisplay";
import MoviesSeries from "../main/MoviesSeries";
import useFetch from "../../customs/useFetch";
import { fetchPopularMovies } from "../../apis/Movies";

function Popular() {
  return (
    <MoviesSeries
      hook={() => useFetch(["popularMovies"], fetchPopularMovies)}
    />
  );
}

export default Popular;
