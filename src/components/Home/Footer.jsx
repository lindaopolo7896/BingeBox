import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#D1D5DB] lg:px-10 py-20 flex items-start justify-between md:gap-10 px-5 flex-col md:flex-row gap-10 ">
      <div className="flex flex-col md:items-center  justify-center gap-4">
        <h1 className="text-2xl font-bold text-[#030712]">BINGEBOX</h1>
        <div className="flex text-black/60 text-3xl gap-10">
          <FaXTwitter className="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer hover:text-[#030712]/80" />
          <FaInstagram className="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer hover:text-[#030712]/80" />
          <FaSquareFacebook className="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer hover:text-[#030712]/80" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-[#030712]">QUICK LINKS</h1>
        <div className="flex flex-col text-lg gap-1 text-black/60 font-medium ">
          <Link
            to="/"
            className="hover:underline hover:text-black/80 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="hover:underline hover:text-black/80 transition-all duration-300 ease-in-out"
          >
            Movies
          </Link>
          <Link
            to="/series"
            className="hover:underline hover:text-black/80 transition-all duration-300 ease-in-out"
          >
            Series
          </Link>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-[#030712]">OTHER LINKS</h1>
        <div className="flex flex-col text-lg gap-1 text-black/60 font-medium ">
          <Link
            to="/"
            className="hover:underline hover:text-black/80 transition-all duration-300 ease-in-out"
          >
            Popular
          </Link>
          <Link
            to="/top-rated"
            className="hover:underline hover:text-black/80 transition-all duration-300 ease-in-out"
          >
            Top Rated
          </Link>
          <Link
            to="/upcoming"
            className="hover:underline hover:text-black/80 transition-all duration-300 ease-in-out"
          >
            Upcoming
          </Link>
          <Link
            to="/watch-list"
            className="hover:underline hover:text-black/80 transition-all duration-300 ease-in-out"
          >
            Watch List
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold text-[#030712]">STAY IN THE LOOP</h1>
        <p className="text-lg text-black/60 max-w-3/4">
          Subscribe to get the latest movies, trending picks, and updates
          delivered to you.
        </p>
        <form action="" className="flex gap-2">
          <input
            type="text"
            className="bg-white p-2 w-full max-w-3/5 rounded-xl"
            placeholder="Enter your email"
          />
          <button className="w-full max-w-1/4 bg-[#030712] text-white font-semibold rounded-xl hover:bg-[#030712]/80 cursor-pointer px-2 text-sm md:text-mf">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
