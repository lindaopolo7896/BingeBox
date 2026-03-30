import { useSearchParams } from "react-router-dom";
import { searchMulti } from "../apis/Movies";
import useFetchById from "../customs/useFetchById";
import MoviesSeries from "../components/main/MoviesSeries";

function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get("q");

  const { data, isLoading, isError, error } = useFetchById(
    query,
    ["search", query],
    searchMulti,
  );

  return (
    <div className="p-6 bg-[#030712] pt-25">
      <h1 className="text-white pl-10 text-2xl mb-4">Results for: {query}</h1>

      <MoviesSeries
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        label="results"
      />
    </div>
  );
}

export default SearchPage;
