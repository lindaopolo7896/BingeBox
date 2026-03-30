import React from "react";

function WatchListBtn({ onClick }) {
  return (
    <button
      className="w-full max-w-sm bg-[#67E8F9] font-bold text-lg p-2 rounded-full cursor-pointer text-[#030712] hover:bg-[#A5F3FC] transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      Add to WatchList
    </button>
  );
}

export default WatchListBtn;
