import React, { useState, useEffect, useMemo } from "react";
import { FaStar } from "react-icons/fa6";
import { TbRating18Plus } from "react-icons/tb";
import useFetch from "../../customs/useFetch";
import { fetchTrendingMovies } from "../../apis/Movies";

function TrendingHero() {
  const { data, isLoading, isError, error } = useFetch(
    ["trending"],
    fetchTrendingMovies,
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const movies = useMemo(() => {
    return data?.results || [];
  }, [data]);

  useEffect(() => {
    if (!movies.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  if (isLoading) {
    return <p>Fetching Trending Movies...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (!movies.length) {
    return <p>No movies found</p>;
  }

  const currentMovie = movies[currentIndex];
  const imageUrl = `https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`;
  const rating = Math.floor(currentMovie?.vote_average / 2);
  return (
    <div
      className="h-screen bg-cover bg-center pt-35 md:pt-40 "
      style={{
        backgroundImage: `url(${imageUrl})`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.8)",
          zIndex: 1,
        }}
      />

      <div className="relative z-2 px-5 md:px-10 flex flex-col gap-6">
        <div className="text-[#D1D5DB]   text-xl flex gap-10 font-semibold">
          <div className="bg-white/10 backdrop-blur-md px-10 py-2 border border-white/20 rounded-full">
            {currentMovie?.media_type}
          </div>
          <div>
            {currentMovie?.adult === "false" ? (
              "family"
            ) : (
              <p className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-10 py-2 border border-white/20 rounded-full">
                PG <TbRating18Plus className="text-red-500 text-3xl" />
              </p>
            )}
          </div>
        </div>
        <h1 className="text-white text-3xl md:text-7xl font-bold">
          {currentMovie?.title.toUpperCase()}
        </h1>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < rating ? "gold" : "gray"} />
          ))}
        </div>
        <div>
          <p className="text-[#D1D5DB] font-bold">
            {currentMovie?.release_date.slice(0, 4)}
          </p>
        </div>
        <p className="text-white w-full md:max-w-3/4 lg:max-w-1/2">
          {currentMovie?.overview}
        </p>
        <button className="w-full max-w-sm bg-[#67E8F9] font-bold text-lg p-2 rounded-full cursor-pointer hover:bg-[#A5F3FC]transition-all duration-300 ease-in-out">
          Add to WatchList
        </button>
      </div>
    </div>
  );
}

export default TrendingHero;
