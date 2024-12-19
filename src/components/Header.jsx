import { ChevronDown, MenuIcon, UserIcon, X } from "lucide-react";
import { menuItems, navItems } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-200 backdrop-blur-xl max-w-7xl flex justify-between p-4 mx-auto fixed top-0 ">
      {/* Logo */}
      <div className="border-[#212122] border rounded-3xl">
        <img
          src="https://assets.zolvit.com/live-images/zolvit-logo-white.svg"
          alt="zolvit"
          className="w-36 px-6 py-2"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="flex  md:border-2 border-[#212122] rounded-3xl px-6 justify-center items-center py-2">
        <ul className="flex gap-8 max-md:hidden">
          {navItems.map((item, index) => (
            <li
              className="flex hover:text-yellow-300 text-xs font-medium cursor-pointer items-center"
              key={index}
            >
              {item} <ChevronDown />
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Buttons */}
      <div className="flex items-center border-[#212122] border rounded-3xl px-6">
        {/* Login Button */}
        <button
          className="md:shadow-[0px_-2px_10px_rgba(0,0,0,0.1)] md:border-gray-800 
          transition-all hover:transition-all hover:scale-105 px-4 py-1 rounded-lg mx-3"
        >
          <span className="max-md:hidden text-yellow-300">Login</span>
          <span className="md:hidden text-yellow-300">
            <UserIcon />
          </span>
        </button>

        {/* Hamburger Menu */}
        <button
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      <nav
        className={`absolute top-20 right-16 rounded-lg shadow-lg max-md:hidden bg-[#151515] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 ">
          {menuItems.map((item, index) => (
            <li
              className="text-white hover:text-yellow-300 text-[0.8rem] font-medium cursor-pointer"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
