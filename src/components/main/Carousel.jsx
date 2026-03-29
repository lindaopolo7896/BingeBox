import React from "react";

function Carousel({
  items = [],
  currentIndex = 0,
  setCurrentIndex,
  visibleRange = 3,
  renderItem,
}) {
  return (
    <div className=" w-full flex justify-center items-center z-30 py-10">
      <div className="relative flex items-center justify-center w-full max-w-4xl">
        {items.map((item, index) => {
          let position = index - currentIndex;

          if (position > items.length / 2) position -= items.length;
          if (position < -items.length / 2) position += items.length;

          if (Math.abs(position) > visibleRange) return null;

          let scale = 1;
          let opacity = 1;

          const baseSpacing = 120;
          let translateX = position * baseSpacing;

          if (position === 0) {
            scale = 1.3;
            opacity = 1;
          } else if (Math.abs(position) === 1) {
            scale = 1;
            opacity = 0.8;
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
