import React from "react";

function MinNav({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-10 px-4 md:px-10">
      {children}
    </div>
  );
}

export default MinNav;
