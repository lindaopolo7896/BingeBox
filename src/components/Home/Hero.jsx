import HeroCarousel from "../main/HeroCarousel";
import { fetchAllTrending } from "../../apis/Movies";

function Hero() {
  return (
    <div>
      <HeroCarousel
        queryKey="trending-all"
        fetchFunction={fetchAllTrending}
        titleKey="title"
      />
    </div>
  );
}

export default Hero;
