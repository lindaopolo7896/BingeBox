import Genres from "../components/Genres/Genres";
import {
  fetchMovieGenre,
  fetchMovieGenreById,
  fetchTrendingMovies,
} from "../apis/Movies";
import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageAnimations";

function Movies() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <Genres
        fetchGenre={fetchMovieGenre}
        fetchGenreById={fetchMovieGenreById}
        fetchTrending={fetchTrendingMovies}
        label="movies"
      />
    </motion.div>
  );
}

export default Movies;
