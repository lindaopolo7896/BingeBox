import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTopRatedMovies } from "../apis/Movies";

function useTopRatedMovies() {
  return useQuery({
    queryKey: ["topRated"],
    queryFn: fetchTopRatedMovies,
  });
}

export default useTopRatedMovies;
