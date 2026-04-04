import { Route, Routes } from "react-router-dom";
import NavBar from "./components/main/NavBar";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Popular from "./components/Home/Popular";
import TopRated from "./components/Home/TopRated";
import Trending from "./components/Home/Trending";
import Footer from "./components/Home/Footer";
import Genres from "./pages/Genres";
import PopularSeries from "./components/Series/PopularSeries";
import TopRatedSeries from "./components/Series/TopRatedSeries";
import UpcomingSeries from "./components/Series/UpcomingSeries";
import MovieDetails from "./components/Home/MovieDetails";
import Movies from "./pages/Movies";
import SearchPage from "./pages/SearchPage";
import WatchList from "./pages/WatchList";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-[#030712] min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchPage />} />
        {/* Home  */}
        <Route path="/" element={<Home />}>
          <Route index element={<Popular />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="upcoming" element={<Trending />} />
          <Route path="watch-list" element={<WatchList />} />
        </Route>

        <Route path="/movies" element={<Movies />}></Route>

        {/* Series */}
        <Route path="/series" element={<Series />}>
          <Route index element={<PopularSeries />} />
          <Route path="top-rated" element={<TopRatedSeries />} />
          <Route path="upcoming" element={<UpcomingSeries />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
