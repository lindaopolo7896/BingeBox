import React from "react";

import { Outlet } from "react-router-dom";
import MiniNav from "../components/Home/MiniNav";

import Hero from "../components/Home/Hero";
import { motion } from "framer-motion";

function Home() {
  const pageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
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
    </motion.div>
  );
}

export default Home;
