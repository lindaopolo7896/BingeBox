import React, { useState } from "react";
import CardDisplay from "./CardDisplay";
import CardDetails from "./CardDetails";

function MoviesSeries({ data, isLoading, isError, error, label = "movies" }) {
  const [selectedItem, setSelectedItem] = useState(null);

  if (isLoading) return <p>Fetching {label}...</p>;
  if (isError) return <p>{error.message}</p>;

  const items = data || [];

  return (
    <>
      <div className="grid-layout">
        {items.map((item) => (
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
        ))}
      </div>

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
