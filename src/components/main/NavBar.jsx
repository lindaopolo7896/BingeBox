import React from "react";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex items-center justify-between py-5 px-2 fixed z-50 w-full md:px-10 lg:py-6 transition-all duration-300 ${
        scrolled
          ? "bg-[#111827]/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-center gap-3">
        <IoMdMenu onClick={handleShow} className="flex md:hidden text-3xl" />
        <h1 className="font-bold text-[#67E8F9] lg:text-xl">BINGEBOX</h1>
      </div>
      <nav
        className={` flex-col md:flex md:flex-row justify-center items-center gap-8 lg:gap-15 fixed md:relative md:h-auto md:bg-transparent right-0 top-0 bg-[#111827] h-screen w-1/2 md:w-full text-xl text-white  ${show ? "flex" : "hidden"}`}
      >
        <IoMdClose
          className="flex md:hidden absolute right-4 top-4 text-3xl cursor-pointer hover:text-white/80"
          onClick={handleShow}
        />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#67E8F9] underline underline-offset-8 font-bold"
              : "hover:text-white/80"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? "text-[#67E8F9] underline underline-offset-8 font-bold"
              : "hover:text-white/80"
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/series"
          className={({ isActive }) =>
            isActive
              ? "text-[#67E8F9] underline underline-offset-8 font-bold"
              : "hover:text-white/80"
          }
        >
          Series
        </NavLink>
      </nav>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search movies..."
        className="bg-white w-full max-w-1/2 lg:max-w-1/4 px-4 rounded-full py-2"
      />
    </div>
  );
}

export default NavBar;
