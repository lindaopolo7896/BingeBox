import React from "react";
import { NavLink } from "react-router-dom";
function MiniNav({ popular, topRated, upcoming, watchList }) {
  return (
    <nav className="flex gap-7 lg:gap-30 text-[#D1D5DB] md:text-xl justify-center  w-full">
      <NavLink
        to={popular}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-8 decoration-[#67E8F9] "
            : "hover:text-white transition-all duration-300 ease-in-out"
        }
      >
        POPULAR
      </NavLink>
      <NavLink
        to={topRated}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-8 decoration-[#67E8F9] "
            : "hover:text-white transition-all duration-300 ease-in-out"
        }
      >
        TOP RATED
      </NavLink>
      <NavLink
        to={upcoming}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-8 decoration-[#67E8F9] "
            : "hover:text-white transition-all duration-300 ease-in-out"
        }
      >
        UPCOMING
      </NavLink>
      <NavLink
        to={watchList}
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-8 decoration-[#67E8F9] "
            : "hover:text-white transition-all duration-300 ease-in-out"
        }
      >
        WATCH LIST
      </NavLink>
    </nav>
  );
}

export default MiniNav;
