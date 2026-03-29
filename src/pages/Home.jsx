import React from "react";

import { Outlet } from "react-router-dom";
import MiniNav from "../components/Home/MiniNav";

import Hero from "../components/Home/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-[#030712] py-10">
        <MiniNav
          popular="/"
          topRated="/top-rated"
          upcoming="/upcoming"
          watchList="/watch-list"
        />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
