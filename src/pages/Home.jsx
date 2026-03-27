import React from "react";
import TrendingHero from "../components/Home/TrendingHero";
import { Outlet } from "react-router-dom";
import MiniNav from "../components/Home/MiniNav";

function Home() {
  return (
    <div>
      <TrendingHero />
      <div className="bg-[#030712] py-10">
        <MiniNav />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
