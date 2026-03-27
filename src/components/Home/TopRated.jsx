import React from "react";
import MinNav from "../../layouts/MinNav";
import CardDisplay from "../main/CardDisplay";
import MoviesSeries from "../main/MoviesSeries";
import useFetch from "../../customs/useFetch";
import { fetchTopRatedMovies } from "../../apis/Movies";

function TopRated() {
  return (
    <MoviesSeries hook={() => useFetch(["ratedMovies"], fetchTopRatedMovies)} />
  );
}

export default TopRated;
