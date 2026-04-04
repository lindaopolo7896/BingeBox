import React, { useEffect, useState } from "react";

function Carousel({
  items = [],
  currentIndex = 0,
  setCurrentIndex,
  visibleRange = 3,
  renderItem,
}) {
  const [spacing, setSpacing] = useState(120);
  const [range, setRange] = useState(visibleRange);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSpacing(80);
        setRange(1);
      } else if (width < 1024) {
        setSpacing(110);
        setRange(2);
      } else {
        setSpacing(150);
        setRange(3);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="w-full  h-38  md:h-64 flex justify-center items-center z-30 md:py-10">
      <div className="relative flex items-center justify-center w-full max-w-5xl">
        {items.map((item, index) => {
          let position = index - currentIndex;

          if (position > items.length / 2) position -= items.length;
          if (position < -items.length / 2) position += items.length;

          if (Math.abs(position) > range) return null;

          let scale = 1;
          let opacity = 1;

          let translateX = position * spacing;

          if (position === 0) {
            scale = 1.25;
            opacity = 1;
          } else if (Math.abs(position) === 1) {
            scale = 1;
            opacity = 0.85;
          } else {
            scale = 0.8;
            opacity = 0.5;
          }

          return (
            <div
              key={item.id || index}
              onClick={() => setCurrentIndex(index)}
              className="absolute cursor-pointer transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex: 50 - Math.abs(position),
                opacity,
              }}
            >
              {renderItem(item, position)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
