import { IoIosCloseCircle } from "react-icons/io";
import { fetchWatchProviders } from "../../apis/Movies";
import { useState, useEffect } from "react";
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
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-3/5 h-3/4 z-50 flex  justify-center bg-cover bg-center rounded-xl "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${image})`,
      }}
    >
      <div
        className="absolute  inset-0 bg-white/10 backdrop-blur-md rounded-xl"
        onClick={onClose}
      />

      <div className="relative flex items-center gap-8 w-full px-6 text-white">
        <IoIosCloseCircle
          onClick={onClose}
          className="absolute  top-4 text-[40px] right-4 cursor-pointer hover:text-white/80 transition-all duration-300 ease-in-out"
        />
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-120 object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-2 w-3/5">
          <h1 className="text-5xl font-bold mt-4">{title}</h1>

          <p className="text-[#67E8F9] font-semibold">
            {release ? release.slice(0, 4) : "N/A"}
          </p>

          <p className="mt-4">{description}</p>

          <p className="mt-2 text-[#030712] font-semibold">
            Popularity:{" "}
            <span className="text-white font-medium">
              {popularity.toFixed(0)}%
            </span>
          </p>

          <p className="font-medium">
            <span className="text-[#67E8F9] font-bold">{recommended}</span>{" "}
            people recommend watching
          </p>
          <div>
            <h1>Watch ON</h1>

            <div className="flex gap-4 mt-4">
              {providers.length === 0 ? (
                <p className="text-red-500"> Not Available</p>
              ) : (
                providers.map((p) => (
                  <img
                    key={p.provider_id}
                    src={`https://image.tmdb.org/t/p/w200${p.logo_path}`}
                    alt={p.provider_name}
                    className="h-15 rounded-lg shadow shadow-[#67E8F9]/40 "
                  />
                ))
              )}
            </div>
          </div>
          <button className="mt-4 w-1/2 font-bold bg-[#67E8F9] text-black px-4 py-2 rounded-full">
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
