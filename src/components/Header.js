import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import logo from "../images/logo.svg";
import { footer } from "../data/footer";
import Menu from "./Menu";

const Header = () => {
  const [navLinks, setNavLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(768)

  useEffect(() => {
    if(window.innerWidth > width) {
      setIsOpen(true);
    }
  }, [])

  return (
    <>
      <header className="absolute p-5 flex items-center justify-between w-full">
        <div>
          <img src={logo} alt="blogr logo" />
        </div>
        {isOpen && (
            <nav className="navbar md:flex md:justify-between">
              <ul>
                {navLinks.map((navLink) => (
                  <li id={navLink.id}>{navLink.title}</li>
                ))}
              </ul>
              <Buttons />
            </nav>
        )}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};

export default Header;
