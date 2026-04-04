import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <motion.input
        whileFocus={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        type="text"
        placeholder="Search movies or series..."
        className="p-2 ring-[#A5F3FC] ring-1 rounded-full bg-white text-black placeholder:text-black/70 "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
