import MoviesSeries from "../main/MoviesSeries";
import useFetch from "../../customs/useFetch";
import { fetchAllUpcoming, fetchUpcomingMovies } from "../../apis/Movies";

function Trending() {
  const { data, isLoading, isError, error } = useFetch(
    ["upcoming"],
    fetchAllUpcoming,
  );
  return (
    <MoviesSeries
      data={data}
      isError={isError}
      isLoading={isLoading}
      error={error}
      label="upcoming "
    />
  );
}

export default Trending;
