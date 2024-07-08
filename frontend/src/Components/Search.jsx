import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="Search..."
        className="p-1 bg-white border border-gray-300 rounded-md shadow-sm"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-">
        <FaSearch className="cursor-pointer" />
      </div>
    </div>
  );
}
