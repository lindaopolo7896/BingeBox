import { normalizeItem } from "../utils/normalize";

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

async function fetchFromTMDBCombined(moviesEndPoint, seriesEndPoint) {
  const [moviesRes, seriesRes] = await Promise.all([
    fetch(`${BASE_URL}${moviesEndPoint}?api_key=${API_KEY}`),
    fetch(`${BASE_URL}${seriesEndPoint}?api_key=${API_KEY}`),
  ]);

  if (!moviesRes.ok || !seriesRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const movieData = await moviesRes.json();
  const seriesData = await seriesRes.json();

  const movies = movieData.results || [];
  const series = seriesData.results || [];

  return [...movies, ...series].map(normalizeItem);
}

// HOME APIS
export async function fetchAllTrending() {
  return fetchFromTMDB("/trending/all/day");
}

export async function fetchAllPopular() {
  return fetchFromTMDBCombined("/movie/popular", "/tv/popular");
}

export async function fetchAllTopRated() {
  return fetchFromTMDBCombined("/movie/top_rated", "/tv/top_rated");
}

export async function fetchAllUpcoming() {
  return fetchFromTMDBCombined("/movie/upcoming", "/tv/on_the_air");
}

export async function fetchDetails(media, id) {
  const response = await fetch(`${BASE_URL}/${media}/${id}?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
}

export async function fetchWatchProviders(media, id) {
  const response = await fetch(
    `${BASE_URL}/${media}/${id}/watch/providers?api_key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json();

  return data.results;
}

// MOVIE APIS
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

export async function fetchMovieGenre() {
  return fetchFromTMDB("/genre/movie/list");
}

export async function fetchMovieGenreById(genreId) {
  return fetchFromTMDB("/discover/movie", `with_genres=${genreId}`);
}

// SERIES APIS
export async function fetchTrendingSeries() {
  return fetchFromTMDB("/trending/tv/day");
}

export async function fetchPopularSeries() {
  return fetchFromTMDB("/tv/popular");
}

export async function fetchTopRatedSeries() {
  return fetchFromTMDB("/tv/top_rated");
}

export async function fetchUpcomingSeries() {
  return fetchFromTMDB("/tv/airing_today");
}

export async function fetchSerieGenre() {
  return fetchFromTMDB("/genre/tv/list");
}

export async function fetchSeriesGenreById(genreId) {
  return fetchFromTMDB("/discover/tv", `with_genres=${genreId}`);
}
