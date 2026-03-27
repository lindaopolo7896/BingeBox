import React from "react";
import { Link } from "react-router-dom";
function MiniNav() {
  return (
    <nav className="flex gap-7 lg:gap-30 text-[#D1D5DB] md:text-xl justify-center  w-full">
      <Link to="/">POPULAR</Link>
      <Link to="/top-rated">TOP RATED</Link>
      <Link to="/upcoming">UPCOMING</Link>
      <Link to="/watch-list">WATCH LIST</Link>
    </nav>
  );
}

export default MiniNav;
