import React from "react";
import SeriesHero from "../components/Series/SeriesHero";
import MiniNav from "../components/Home/MiniNav";
import { Outlet } from "react-router-dom";

function Series() {
  return (
    <div className="bg-[#030712]">
      <SeriesHero />
      <div className="bg-[#030712] py-10">
        <MiniNav
          popular="/series"
          topRated="/series/top-rated"
          upcoming="/series/upcoming"
          watchList="/series/watch-list"
        />
        <Outlet />
      </div>
    </div>
  );
}

export default Series;
