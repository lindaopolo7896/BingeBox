export function normalizeItem(item) {
  return {
    id: item?.id,

    title: item?.title || item?.name || "Unknown",

    poster: item?.poster_path || null,

    date: item?.release_date || item?.first_air_date || null,

    media_type: item?.media_type ?? (item?.first_air_date ? "tv" : "movie"),
    backdrop: item.backdrop_path,
    overview: item?.overview || "",

    vote_average: item?.vote_average ?? 0,
    vote_count: item?.vote_count ?? 0,
    popularity: item?.popularity ?? 0,
  };
}

export function normalizeResponse(response) {
  if (!response) return [];

  const items = Array.isArray(response) ? response : response.results || [];

  return items.map(normalizeItem);
}
