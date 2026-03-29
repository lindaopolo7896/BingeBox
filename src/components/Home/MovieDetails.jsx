import { useParams } from "react-router-dom";
import useFetch from "../../customs/useFetch";
import { fetchDetails } from "../../apis/Movies";
import CardDetails from "../main/CardDetails";
function MovieDetails() {
  const { id } = useParams();

  const media = window.location.pathname.includes("tv") ? "tv" : "movie";

  const { data, isLoading, isError, error } = useFetch(
    ["details", media, id],
    () => fetchDetails(media, id),
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const image = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;

  return (
    <CardDetails
      image={image}
      title={data.title || data.name}
      description={data.overview}
      release={data.release_date || data.first_air_date}
      rating={data.vote_average}
      popularity={data.popularity}
      recommended={data.vote_count}
    />
  );
}

export default MovieDetails;
