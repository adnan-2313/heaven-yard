import { mobileNavItems, navItems } from "@/utils/constant";
import { useState } from "react";
import logo from "../../public/logo.png";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { ChevronDown, ChevronRight, MenuIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  return (
    <>
      <div className="flex justify-center w-full">
        <header className="w-full fixed z-50 backdrop-blur-3xl mx-auto max-w-[90rem] text-md flex items-center">
          <nav className=" w-full flex justify-between items-center px-4 py-2">
            <Link to="/">
              <img src={logo} alt="" className="w-44 mr-36" />
            </Link>
            <ul className="text-[1rem]   w-full  hidden lg:flex   lg:gap-8 justify-center  h-8   items-end  mr-16">
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center font-semibold  text-[#050c2b] gap-1 hover:text-[#536574] border-black hover:transition-all transition-all cursor-pointer "
                  >
                    {item}
                    {(item === "Projects" || item === "Services") && (
                      <ChevronDown />
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-2 flex-row-reverse ">
              <button
                className={` lg:hidden `}
                onClick={() => setIsOpen(!isOpen)}
              >
                <MenuIcon />
              </button>

              <div className="z-10 hidden  lg:flex max-xs:left-48">
                <SignedOut>
                  <SignInButton>
                    <Button
                      className="px-4 py-1 text-sm rounded-sm backdrop-blur-xl text-white
                     bg-gray-900 hover:bg-gray-900  bg-opacity-20 hover:bg-opacity-30"
                    >
                      Login
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
              {user?.id === "user_2qXN0OKqqgfTRYLzTKNfLQXu5Yh" && (
                <Button
                  className={`rounded-none px-8 bg-[#050c2b] hover:bg-[#050c2bce] max-lg:hidden mr-3 `}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link to="/admindashboard">Admin</Link>
                </Button>
              )}
            </div>
          </nav>
        </header>
      </div>
      /{" "}
      <nav
        className={`z-50 left-0 w-full top-0 fixed ${
          isOpen ? "h-screen" : "h-0"
        } right-16  shadow-lg lg:hidden  bg-white  overflow-hidden transition-all duration-500 `}
      >
        <div className="bg-blue-50">
          <div className="flex justify-between px-4 pt-2 border-b border-gray-300 ">
            <img src={logo} alt="" className="w-44 mr-36" />
            <button className="" onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          <div className="flex gap-4 p-4 font-semibold text-blue-950">
            {user ? "Account" : "Login in to Your Account"}
            <div className="z-10 flex max-xs:left-48">
              <SignedOut>
                <SignInButton>
                  <Button
                    className="px-4 py-1 text-sm rounded-sm text-white
                     bg-blue-950 hover:bg-blue-900  "
                  >
                    Login
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-4 p-4 ">
          <li className="text-black flex justify-center hover:text-blue-900 transition-all text-md  py-2 font-medium cursor-pointer">
            {user?.id === "user_2qXN0OKqqgfTRYLzTKNfLQXu5Yh" && (
              <Button
                size="xl"
                className={` w-full rounded-none bg-[#050c2b] hover:bg-blue-900  mr-3 `}
                onClick={() => setIsOpen(!isOpen)}
              >
                Admin Dashboard
              </Button>
            )}
          </li>
          {mobileNavItems.map((item, index) => (
            <li
              className="text-black flex justify-between hover:text-blue-900 transition-all text-md border-b py-2 font-medium cursor-pointer"
              key={index}
            >
              <span className="flex gap-4 items-center">
                {" "}
                <item.icon size={20} color="#172554" /> {item.name}
              </span>
              <ChevronRight />
            </li>
          ))}
        </ul>
      </nav>
    </>
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
