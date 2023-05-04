import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    // tailwind utility classes to create card styling quickly by using classname, e.g. w-full sets full width of whichever screen its on, great for responsive designs
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-{32px]" />

      {/* notes on code desktop ul navbar 
      - only for desktop device, not mobile -> create a seperate one for mobile below in new div 
      - each list item in a map needs a key and a dynamic classname
      - map over each navlink and instantly return the component, within the 'a' tag you want the id to change corrosponding to the page the client clicked in the navbar */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* notes on navbar for mobile
      - menu image in navbar, clicking the burger icon expands the menu
      - set state of image to be toggled close by default
      - if toggle is turned on, show a close icon, otherwise show a menu icon
      - add an onClick callback function so that onclick that sets the toggle to the opposite state of whatever it is currently at, you should never update the state directly e.g. setTottle(!toggle)
      - create a new div inside this one which displays menu ONLY if the toggle is turned on, otherwise it remains hidden */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          classNAme="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
