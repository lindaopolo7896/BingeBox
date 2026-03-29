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

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<MovieDetails />} />
        {/* Movies  */}
        <Route path="/" element={<Home />}>
          <Route index element={<Popular />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="upcoming" element={<Trending />} />
        </Route>
        <Route path="/genres" element={<Genres />} />

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
