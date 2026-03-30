import { useState } from "react";

function GenreList({ data, isLoading, isError, error, onSelectGenre }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <p>Fetching genres...</p>;
  if (isError) return <p>{error.message}</p>;

  const genres = data || [];

  return (
    <div className="flex gap-4 flex-wrap pt-10 px-10">
      {genres.map((genre, index) => (
        <button
          key={genre.id}
          onClick={() => {
            setCurrentIndex(index);
            onSelectGenre(genre.id);
          }}
          className={`px-4 py-1 text-sm rounded-full transition-all ${
            currentIndex === index
              ? "bg-cyan-400 text-black"
              : "bg-white/10 text-white"
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default GenreList;
