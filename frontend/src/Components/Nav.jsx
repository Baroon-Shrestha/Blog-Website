import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#121212] text-[#868686] ">
      <nav className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8 border-b border-[#868686]">
        <div className="text-lg font-bold">Blogs</div>
        <ul className="hidden md:flex gap-8 capitalize ">
          <li className="active:text-white hover:text-white">one</li>
          <li className="active:text-white hover:text-white">two</li>
          <li className="active:text-white hover:text-white">three</li>
        </ul>
        <div className="flex items-center gap-8">
          <div className=" md:block cursor-pointer hover:text-white transition-all delay-100 ease-in-out hover:bg-secondary-text py-2 px-4 border border-secondary-text rounded-lg">
            Login
          </div>
          <div className={`md:hidden cursor-pointer`} onClick={toggleMenu}>
            <IoMenu size={24} />
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 capitalize pb-4">
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      )}
    </header>
  );
}
