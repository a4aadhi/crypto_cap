import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../assets/Logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const Links = [
    { id: 1, link: "home" },
    { id: 2, link: "Businesses" },
    { id: 3, link: "Trade" },
    { id: 4, link: "Market" },
    { id: 5, link: "Learn" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-secondary-200 fixed">
      <div>
        <img className="flex justify-center w-48  ml-2" src={icon} alt="icon" />
      </div>
      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-white hover:text-primary"
            >
              <a href=""></a>
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-4 z-10 text-primary md:hidden"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {nav && (
        <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-secondary-200 text-primary">
          {Links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <a href=""></a>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
