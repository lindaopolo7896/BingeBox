import GenreList from "../components/main/GenreList";

import MovieGenres from "../components/Genres/MovieGenres";
import SeriesGenre from "../components/Genres/SeriesGenre";

function Genres() {
  return (
    <div className="bg-[#030712] pt-30 px-10 flex items-start w-full gap-15 min-h-screen">
      <MovieGenres />
      <SeriesGenre />
    </div>
  );
}

export default Genres;
