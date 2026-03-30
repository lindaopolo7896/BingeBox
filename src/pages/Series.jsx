import Genres from "../components/Genres/Genres";
import {
  fetchSerieGenre,
  fetchSeriesGenreById,
  fetchTrendingSeries,
} from "../apis/Movies";

function Series() {
  return (
    <Genres
      fetchGenre={fetchSerieGenre}
      fetchGenreById={fetchSeriesGenreById}
      fetchTrending={fetchTrendingSeries}
      label="series"
    />
  );
}

export default Series;
