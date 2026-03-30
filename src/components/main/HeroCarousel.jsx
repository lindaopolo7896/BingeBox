import React, { useState, useEffect, useMemo } from "react";
import { FaStar } from "react-icons/fa6";
import { TbRating18Plus } from "react-icons/tb";
import useFetch from "../../customs/useFetch";
import Carousel from "./Carousel";
import WatchListBtn from "../Home/WatchListBtn";
import { addToWatchList } from "../../utils/watchlist";

function HeroCarousel({ queryKey, fetchFunction, titleKey = "title" }) {
  const { data, isLoading, isError, error } = useFetch(
    [queryKey],
    fetchFunction,
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const items = useMemo(() => data || [], [data]);

  useEffect(() => {
    if (!items.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [items]);

  if (isLoading) return <p>Fetching...</p>;
  if (isError) return <p>{error.message}</p>;
  if (!items.length) return <p>No data found</p>;

  const currentItem = items[currentIndex];
  const imageUrl = `https://image.tmdb.org/t/p/original/${currentItem?.backdrop}`;
  const rating = Math.floor(currentItem?.vote_average / 2);

  return (
    <div
      className="h-screen pt-35 bg-cover bg-center  flex  flex-col gap-30"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute  inset-0 bg-black/80 z-10" />

      <div className="relative z-20 px-5 md:px-10 flex flex-col gap-2 md:gap-4">
        <div className="text-[#D1D5DB] text-xl flex gap-3 md:gap-10 font-semibold">
          <div className="bg-white/10 backdrop-blur-md flex items-center justify-center  px-3 md:px-10 md:py-2 border border-white/20 text-sm md:text-lg rounded-full">
            {currentItem?.media_type}
          </div>

          <div>
            {!currentItem?.adult ? (
              <p className="bg-white/10 backdrop-blur-md flex items-center justify-center  px-3 md:px-10 md:py-2 border border-white/20 text-sm md:text-lg rounded-full">
                Family
              </p>
            ) : (
              <p className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-10 py-2 border border-white/20 rounded-full">
                PG <TbRating18Plus className="text-red-500 text-3xl" />
              </p>
            )}
          </div>
        </div>

        <h1 className="text-white text-3xl md:text-7xl font-bold">
          {currentItem?.title?.toUpperCase() ||
            currentItem?.name?.toUpperCase()}
        </h1>

        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < rating ? "gold" : "gray"} />
          ))}
        </div>

        <p className="text-[#D1D5DB] font-bold">
          {currentItem?.release_date?.slice(0, 4) ||
            currentItem?.first_air_date?.slice(0, 4)}
        </p>

        <p className="text-white w-full md:max-w-3/4 lg:max-w-1/2">
          {currentItem?.overview}
        </p>

        <WatchListBtn onClick={() => addToWatchList(currentItem)} />
      </div>

      <Carousel
        items={items}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        renderItem={(item, position) => (
          <img
            src={`https://image.tmdb.org/t/p/w300/${item.poster}`}
            alt={item[titleKey]}
            className={`w-20 h-24 sm:w-20 sm:h-36 md:w-32 md:h-44 lg:w-36 lg:h-48 object-cover rounded-xl border border-white shadow-lg ${
              position === 0 ? "shadow-[#67E8F9]/40 shadow-lg" : ""
            }`}
          />
        )}
      />
    </div>
  );
}

export default HeroCarousel;
