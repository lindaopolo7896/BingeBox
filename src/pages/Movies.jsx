import Genres from "../components/Genres/Genres";
import {
  fetchMovieGenre,
  fetchMovieGenreById,
  fetchTrendingMovies,
} from "../apis/Movies";

function Movies() {
  return (
    <Genres
      fetchGenre={fetchMovieGenre}
      fetchGenreById={fetchMovieGenreById}
      fetchTrending={fetchTrendingMovies}
      label="movies"
    />
  );
}

export default Movies;
