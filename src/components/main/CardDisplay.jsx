import { FaCirclePlay } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { RiTvFill } from "react-icons/ri";

function CardDisplay({ image, title, release, media, onPlay }) {
  const imageUrl = `https://image.tmdb.org/t/p/original`;

  return (
    <div className="bg-[#111827] hover:shadow-lg hover:shadow-[#A5F3FC]/25 hover:scale-105 transition-all duration-300">
      <div
        style={{ backgroundImage: `url(${imageUrl}${image})` }}
        className="h-[300px] bg-cover bg-center flex items-center justify-center"
      >
        <FaCirclePlay
          onClick={onPlay}
          className="text-5xl text-[#67E8F9] cursor-pointer hover:scale-110 transition"
        />
      </div>

      <h1 className="text-white mt-2 ml-2">{title?.toUpperCase()}</h1>

      <div className="flex items-center justify-between p-2">
        <p className="text-[#D1D5DB] text-sm">
          {release ? release.slice(0, 4) : "N/A"}
        </p>

        {media === "movie" ? (
          <MdLocalMovies className="text-[#A5F3FC]" />
        ) : (
          <RiTvFill className="text-[#A5F3FC]" />
        )}
      </div>
    </div>
  );
}

export default CardDisplay;
