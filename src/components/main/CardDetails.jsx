import { IoIosCloseCircle } from "react-icons/io";
import { fetchWatchProviders } from "../../apis/Movies";
import { useState, useEffect } from "react";
import WatchListBtn from "../Home/WatchListBtn";
function CardDetails({
  id,
  media,
  image,
  title,
  description,
  release,
  rating,
  popularity,
  recommended,
  onClose,
}) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const data = await fetchWatchProviders(media, id);

      // example: Kenya region
      const kenyaProviders = data?.US?.flatrate || [];

      setProviders(kenyaProviders);
    }

    loadProviders();
  }, [id, media]);
  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-full h-screen 
       lg:w-3/5  lg:h-7/8 z-50 flex justify-center bg-cover bg-center md:rounded-xl "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${image})`,
      }}
    >
      <div
        className="absolute  inset-0 bg-white/10 backdrop-blur-md lg:rounded-xl"
        onClick={onClose}
      />

      <div className="relative flex-col lg:flex-row flex items-center gap-2 md:gap-8 w-full lg:px-6 text-white">
        <IoIosCloseCircle
          onClick={onClose}
          className="absolute  top-4 text-[40px] right-4 cursor-pointer hover:text-white/80 transition-all duration-300 ease-in-out"
        />
        <div className="w-full lg:w-1/2 ">
          <img
            src={image}
            alt={title}
            className="w-full h-60 lg:h-120 object-cover rounded-t-lg lg:rounded-lg"
          />
        </div>

        <div className="flex flex-col px-3 gap-2 lg:w-3/5">
          <h1 className="text-2xl md:text-5xl font-bold lg:mt-4">{title}</h1>

          <p className="text-[#67E8F9] font-semibold">
            {release ? release.slice(0, 4) : "N/A"}
          </p>

          <p className="lg:mt-2 text-[#67E8F9] font-semibold">
            Rating:{" "}
            <span className="text-[#FFCD29] font-medium">
              {rating.toFixed(0)}/10
            </span>
          </p>

          <p className="text-sm md:text-md lg:mt-4 text-[#D1D5DB]">
            {description}
          </p>

          <p className="font-medium">
            <span className="text-[#67E8F9] font-bold">{recommended}</span>{" "}
            people recommend watching
          </p>
          <div>
            <h1 className="text-[#67E8F9] underline">Watch ON:</h1>

            <div className="flex gap-4 mt-4 flex-wrap">
              {providers.length === 0 ? (
                <p className="text-red-500"> Not Available</p>
              ) : (
                providers.map((p) => (
                  <img
                    key={p.provider_id}
                    src={`https://image.tmdb.org/t/p/w200${p.logo_path}`}
                    alt={p.provider_name}
                    className="h-10 md:h-15 rounded-lg shadow shadow-[#67E8F9]/40 hover:scale-105 transition-all duration-300 ease-in-out "
                  />
                ))
              )}
            </div>
          </div>
          <WatchListBtn />
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
