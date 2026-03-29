import React from "react";
import HeroCarousel from "../main/HeroCarousel";
import { fetchTrendingSeries } from "../../apis/Movies";

function SeriesHero() {
  return (
    <HeroCarousel
      queryKey="trending-series"
      fetchFunction={fetchTrendingSeries}
      titleKey="name"
    />
  );
}

export default SeriesHero;
