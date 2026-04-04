import React, { useState } from "react";
import CardDisplay from "./CardDisplay";
import CardDetails from "./CardDetails";
import { motion } from "framer-motion";

function MoviesSeries({ data, isLoading, isError, error, label = "movies" }) {
  const [selectedItem, setSelectedItem] = useState(null);

  if (isLoading) return <p>Fetching {label}...</p>;
  if (isError) return <p>{error.message}</p>;

  const items = data || [];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid-layout"
      >
        {items.map((item) => (
          <motion.div variants={item}>
            <CardDisplay
              key={`${item.media_type}-${item.id}`}
              id={item.id}
              image={item.poster}
              title={item.title}
              release={item.date}
              media={item.media_type}
              item={item}
              onPlay={() => setSelectedItem(item)}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedItem && (
        <CardDetails
          id={selectedItem.id}
          media={selectedItem.media_type}
          image={`https://image.tmdb.org/t/p/original${selectedItem.poster}`}
          title={selectedItem.title}
          description={selectedItem.overview}
          release={selectedItem.date}
          rating={selectedItem.vote_average}
          popularity={selectedItem.popularity}
          recommended={selectedItem.vote_count}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}

export default MoviesSeries;
