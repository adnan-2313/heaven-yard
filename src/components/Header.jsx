import { navItems } from "@/utils/constant";
import { useState } from "react";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";
import { ChevronDown, LogIn, LogInIcon, User } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-50  mx-auto fixed backdrop-blur-xl  justify-center items-center  max-w-[90rem]   text-md  flex ">
      <nav className=" py-2 flex justify-between items-center w-full px-6">
        <img src={logo} alt="" className="w-44 mr-36" />
        <ul className="text-lg   w-full  hidden lg:flex  gap-14 h-8   items-end  mr-16">
          {navItems.map((item,index) => {
            return (
              <li key={index} className="flex items-center   text-white gap-1 hover:text-[#536574] border-black hover:transition-all transition-all cursor-pointer ">
                {item}{(item === "Projects" || item === "Services") && <ChevronDown/> }
              </li>
            );
          })}
        </ul>
        <button className="text-xl border  text-white p-2  border-white rounded-full ">
          <User />
        </button>
      </nav>
    </header>
  );
};

export default Header;

// <section className="w-full flex justify-center items-center absolute">
//   <header className="w-full z-200 items-center backdrop-blur-xl max-w-8xl flex justify-between p-4 mx-auto fixed top-0 ">
//     {/* Logo */}
//     <div className="border-[#18243b] border rounded-3xl">
//       <img
//         src="https://assets.zolvit.com/live-images/zolvit-logo-white.svg"
//         alt="zolvit"
//         className="w-36 px-6 py-2"
//       />
//     </div>

//     {/* Desktop Navigation */}
//     <nav className="flex  md:border-2 border-[#18243b] rounded-3xl px-6 justify-center items-center py-2">
//       <ul className="flex gap-8 max-md:hidden">
//         {navItems.map((item, index) => (
//           <li
//             className="flex hover:text-yellow-300 text-xs font-medium cursor-pointer items-center"
//             key={index}
//           >
//             {item} <ChevronDown />
//           </li>
//         ))}
//       </ul>
//     </nav>

//     {/* Right Buttons */}
//     <div className="flex items-center border-[#18243b] border rounded-3xl px-6">
//       {/* Login Button */}
//       <button
//         className="md:shadow-[0px_-2px_10px_rgba(0,0,0,0.1)] md:border-gray-800
//       transition-all hover:transition-all hover:scale-105 px-4 py-1 rounded-lg mx-3"
//       >
//         <span className="max-md:hidden text-[#7191cc]">Login</span>
//         <span className="md:hidden text-300">
//           <UserIcon />
//         </span>
//       </button>

//       {/* Hamburger Menu */}
//       <button
//         className={`transition-transform duration-300 ${
//           isOpen ? "rotate-90" : "rotate-0"
//         }`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X /> : <MenuIcon />}
//       </button>
//     </div>

//     <div
//       className={`absolute top-20 right-16 rounded-lg shadow-lg max-md:hidden bg-[#121f38] overflow-hidden transition-all duration-300 ${
//         isOpen ? "max-h-[400px]" : "max-h-0"
//       }`}
//     >
//       <ul className="flex flex-col gap-4 p-4 ">
//         {menuItems.map((item, index) => (
//           <li
//             className="text-white hover:text-blue-300 text-[0.8rem] font-medium cursor-pointer"
//             key={index}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </header>
//   <nav
//     className={` z-50 left-0 w-full top-20 fixed right-16 rounded-lg shadow-lg md:hidden bg-opacity-50 bg-[#121f38] backdrop-blur-lg overflow-hidden transition-all duration-300 ${
//       isOpen ? "max-h-[100vh]" : "max-h-0"
//     }`}
//   >
//     <ul className="flex flex-col gap-4 p-4 ">
//       {navItems.map((item, index) => (
//         <li
//           className="text-white flex justify-between hover:text-blue-300 text-md border-b-2 py-4 font-medium cursor-pointer"
//           key={index}
//         >
//           {item} <ChevronRight />
//         </li>
//       ))}
//       <li className="text-white flex justify-between">
//         More <ChevronRight />{" "}
//       </li>
//     </ul>
//   </nav>
// </section>
