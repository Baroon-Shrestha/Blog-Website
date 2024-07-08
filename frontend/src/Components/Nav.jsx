import React, { useState } from "react";
import Search from "./Search";
import { CiSearch } from "react-icons/ci";

export default function Nav() {
  const [activeSearch, setActiveSearch] = useState(false);

  const toggleSearch = () => {
    setActiveSearch(!activeSearch);
  };

  return (
    <div className="flex justify-between items-center container mx-auto py-6 ">
      {/* left */}
      <div className="flex gap-8">
        {/* logo */}
        <div className="font-bold text-4xl italic">BlogSpot.</div>
        {/* icons */}
        <ul className="flex items-center gap-4">
          <li>Podcasts</li>
          <li>News</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* right */}
      <div className="flex items-center gap-4">
        {/* search button */}
        <div
          className={`text-2xl transition-all duration-700 ease-in-out transform 
            `}
          onClick={toggleSearch}
        >
          {activeSearch ? <Search /> : <CiSearch />}
          {/* <Search /> */}
        </div>
        {/* login */}
        <div className="py-2 px-4 border rounded-md">Login</div>
      </div>
    </div>
  );
}
