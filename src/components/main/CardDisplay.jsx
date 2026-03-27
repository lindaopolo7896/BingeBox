import { FaCirclePlay } from "react-icons/fa6";

function CardDisplay({ image, title, release }) {
  const imageUrl = `https://image.tmdb.org/t/p/original`;
  return (
    <div className="bg-[#111827] hover:shadow-lg hover:shadow-[#A5F3FC]/25 hover:scale-105 transition-all duration-300 ease-in-out">
      <div
        style={{
          backgroundImage: `url(${imageUrl}${image})`,
        }}
        className="h-[300px] bg-cover bg-center flex items-center justify-center"
      >
        <FaCirclePlay className="text-5xl text-[#67E8F9]" />
      </div>
      <h1 className="text-white mt-2 ml-2">{title.toUpperCase()}</h1>
      <p className="text-[#D1D5DB] text-sm ml-2 mb-2">{release.slice(0, 4)}</p>
    </div>
  );
}

export default CardDisplay;
