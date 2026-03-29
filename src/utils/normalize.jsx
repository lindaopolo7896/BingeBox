export function normalizeItem(item) {
  return {
    id: item.id,

    title: item.title || item.name || "Unknown",

    poster: item.poster_path,

    date: item.release_date || item.first_air_date || null,

    media_type: item.media_type || (item.first_air_date ? "tv" : "movie"),
    overview: item.overview,
    vote_average: item.vote_average,
    vote_count: item.vote_count,
    popularity: item.popularity,
  };
}
