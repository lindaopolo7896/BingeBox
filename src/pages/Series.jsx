import Genres from "../components/Genres/Genres";
import {
  fetchSerieGenre,
  fetchSeriesGenreById,
  fetchTrendingSeries,
} from "../apis/Movies";
import { pageVariants } from "../animations/pageAnimations";
import { motion } from "framer-motion";

function Series() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <Genres
        fetchGenre={fetchSerieGenre}
        fetchGenreById={fetchSeriesGenreById}
        fetchTrending={fetchTrendingSeries}
        label="series"
      />
    </motion.div>
  );
}

export default Series;
