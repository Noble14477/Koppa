import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { FaArrowUp, FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);


  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToTop = () => {
    window.scroll(0, 0);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
    
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="w-full">
      <div className="bg-accent border-b border-secondary  py-2 px-6 w-full md:block hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 ">
          <p className="text-primary text-xs">
            Email Address:{" "}
            <span className="text-background">buildream@info.com</span>{" "}
          </p>
          <span className="flex gap-4 text-background">
            <FaFacebook />
            <FaInstagram />
            <span className="text-sm">Admin?</span>
          </span>
        </div>
      </div>
      <div className="bg-accent md:px-6 px-4 py-3 h-[70px] flex sticky w-full top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <div className="flex text-background gap-2 my-auto">
            <img src={logo} alt="koppa-logo" className="w-[50px]" />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-widest">KOPPA</span>
              <span className="font-semibold tracking-widest text-primary">
                DESIGN
              </span>
            </div>
          </div>
          <nav className="hidden text-background md:flex justify-center items-center gap-6 text-[16px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-primary bg-primary grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6"
              }
            >
              <span className="-skew-x-12 ">Home</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-primary bg-primary grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6"
              }
            >
              <span className="-skew-x-12 ">About</span>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-primary bg-primary grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6"
              }
            >
              <span className="-skew-x-12 ">Services</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-primary bg-primary grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6"
              }
            >
              <span className="-skew-x-12 ">Contact</span>
            </NavLink>
            <NavLink
              to="/works"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-primary bg-primary grid place-content-center skew-x-12  duration-150 h-[70px] px-6"
                  : "px-6"
              }
            >
              <span className="-skew-x-12 ">Works</span>
            </NavLink>
          </nav>


          {/* mobile */}
          <MdMenu className="text-3xl text-background md:hidden" onClick={handleMenu} />

          <nav
            className={
              isOpen
                ? "bg-accent h-[100%] w-[90%] z-50 pt-[6rem] fixed top-0 right-0 bottom-0 text-background flex flex-col md:hidden items-center gap-8 text-[16px]"
                : "hidden"
            }
          >
            <FaTimes
              className="text-3xl absolute top-[20px] left-[20px]"
              onClick={handleMenu}
            />
            <NavLink
              to="/"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-primary bg-primary grid place-content-center duration-150 py-4 w-full px-6"
                  : "px-6"
              }
            >
              <span className="">Home</span>
            </NavLink>

            <NavLink
              to="/about"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-primary bg-primary grid place-content-center duration-150 py-4 w-full px-6"
                  : "px-6"
              }
            >
              <span className=" ">About</span>
            </NavLink>
            <NavLink
              to="/services"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-primary bg-primary grid place-content-center duration-150 py-4 w-full px-6"
                  : "px-6"
              }
            >
              <span className=" ">Services</span>
            </NavLink>
            
            <NavLink
              to="/works"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-primary bg-primary grid place-content-center duration-150 py-4 w-full px-6"
                  : "px-6"
              }
            >
              <span className=" ">Works</span>
            </NavLink>

            <div className="absolute bottom-10 flex justify-center items-center flex-col gap-6">
              <p className="text-primary text-xs">
                Email Address:{" "}
                <span className="text-background">buildream@info.com</span>{" "}
              </p>
              <span className="flex gap-4 ">
                <FaFacebook />
                <FaInstagram />
                <span className="text-sm">Admin?</span>
              </span>
            </div>
          </nav>
        </div>
      </div>

      {
        scrollY > 300 ? (
            <div className="fixed md:bottom-20 bottom-10 md:right-10 right-3 z-40 cursor-pointer" onClick={handleScrollToTop}>
            <div className=" bg-primary text-white w-[40px] h-[40px] flex justify-center items-center rounded-full shadow-lg">
                <FaArrowUp/>
            </div>
            {
                scrollY <= 1000 ? (
                    <span className="font-semibold">To Top</span>

                ) : null
            }
            </div>
        ) : null
      }
    </div>
  );
};

export default Navbar;
