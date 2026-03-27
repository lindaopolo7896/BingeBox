import { Route, Routes } from "react-router-dom";
import NavBar from "./components/main/NavBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Popular from "./components/Home/Popular";
import TopRated from "./components/Home/TopRated";
import Trending from "./components/Home/Trending";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Popular />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="upcoming" element={<Trending />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </div>
  );
}

export default App;
