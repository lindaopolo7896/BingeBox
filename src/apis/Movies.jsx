const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchFromTMDB(endpoint, params = "") {
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${API_KEY}&${params}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${endpoint}`);
  }

  return response.json();
}

export async function fetchTrendingMovies() {
  return fetchFromTMDB("/trending/movie/day");
}

export async function fetchPopularMovies() {
  return fetchFromTMDB("/movie/popular");
}

export async function fetchTopRatedMovies() {
  return fetchFromTMDB("/movie/top_rated");
}

export async function fetchUpcomingMovies() {
  return fetchFromTMDB("/movie/upcoming");
}
