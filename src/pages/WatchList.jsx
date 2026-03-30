import { useState, useEffect } from "react";
import { getWatchList } from "../utils/watchlist";
import MoviesSeries from "../components/main/MoviesSeries";

function WatchList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    setShows(getWatchList());
  }, []);
  return (
    <div>
      <MoviesSeries
        data={shows}
        isLoading={false}
        isError={false}
        error={null}
        label="watchlist"
      />
    </div>
  );
}

export default WatchList;
