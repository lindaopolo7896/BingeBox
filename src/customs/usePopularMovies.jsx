import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../apis/Movies";

function usePopularMovies() {
  return useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });
}

export default usePopularMovies;
