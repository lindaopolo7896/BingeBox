import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }
  return (
    <div className="flex items-center justify-between py-5 px-2 fixed z-10 w-full md:px-10 lg:py-6">
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
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
      </nav>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search movies..."
        className="bg-white w-full max-w-1/2 lg:max-w-1/3 px-4 rounded-full py-2"
      />
    </div>
  );
}

export default NavBar;
