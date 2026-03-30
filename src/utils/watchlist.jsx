const WATCHLIST_KEY = "bingeBoxWatchList";

export function getWatchList() {
  const stored = localStorage.getItem(WATCHLIST_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addToWatchList(item) {
  const watchList = getWatchList();

  const exists = watchList.some((movie) => movie.id === item.id);
  if (exists) return watchList;

  const updated = [...watchList, item];

  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updated));

  return updated;
}

export function removeFromWatchlist(id) {
  const watchList = getWatchList();

  const updated = watchList.filter((movie) => movie.id !== id);

  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updated));

  return updated;
}

export function isInWatchlist(id) {
  const watchList = getWatchList();
  return watchList.some((movie) => movie.id === id);
}
