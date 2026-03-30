import React from "react";

function GenreLayout({ children }) {
  return (
    <div className="flex flex-col pt-15  gap-3 w-full bg-[#030712] ">
      {children}
    </div>
  );
}

export default GenreLayout;
