import React from "react";

function GenreLayout({ children }) {
  return (
    <div className="flex flex-col  gap-3 w-1/2 border border-white/10 p-6 rounded-xl">
      {children}
    </div>
  );
}

export default GenreLayout;
