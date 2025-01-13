import { mobileNavItems, navItems } from "@/utils/constant";
import { useEffect, useState } from "react";
import logo from "../../public/logo.png";

import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { ChevronRight, MenuIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, NavLink, useSearchParams } from "react-router-dom";
const Header = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  
  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };
  const handleMobileClick = () => {
    setIsOpen(false);
    setShowSignIn(true);
  };
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
                    className="flex items-center font-semibold  text-[#050c2b] gap-1 hover:text-[#1e2857] border-black hover:transition-all transition-all cursor-pointer "
                  >
                    <NavLink className="flex" to={item.link}>
                      {item.label}
                      {item.label === "Projects" || item.label === "Services"}
                    </NavLink>
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
                  <Button
                    onClick={() => setShowSignIn(true)}
                    className="px-4 py-1 text-sm rounded-sm backdrop-blur-xl text-white
                     bg-gray-900 hover:bg-gray-900  bg-opacity-20 hover:bg-opacity-30"
                  >
                    Login
                  </Button>
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
                <Button
                  onClick={handleMobileClick}
                  className="px-4 py-1 text-sm rounded-sm text-white
                     bg-blue-950 hover:bg-blue-900  "
                >
                  Login
                </Button>
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
              <NavLink to="/admindashboard" className="w-full">
                <Button
                  size="xl"
                  className={` w-full rounded-none bg-[#050c2b] hover:bg-blue-900  mr-3 `}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Admin Dashboard
                </Button>
              </NavLink>
            )}
          </li>
          {mobileNavItems.map((item, index) => (
            <NavLink
              className=""
              to={item.link}
              key={index}
              onClick={() => setIsOpen(false)}
            >
              <li className="text-black flex justify-between hover:text-blue-900 transition-all text-md border-b py-2 font-medium cursor-pointer">
                <span className="flex gap-4 items-center">
                  {" "}
                  <item.icon size={20} color="#172554" /> {item.name}
                </span>
                <ChevronRight />
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 flex z-[100] items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn signUpForceRedirectUrl="/" fallbackRedirectUrl="/"></SignIn>
        </div>
      )}
    </>
  );
};

export default Header;

