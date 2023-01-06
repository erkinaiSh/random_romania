import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

import "./NavbarStyles.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>ROMANIA</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="/about" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="/TouristicPlaces" smooth={true} duration={500}>
          <li>Touristic Places</li>
        </Link>
        <Link to="/history" smooth={true} duration={500}>
          <li>History</li>
        </Link>
      </ul>

      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="/about" smooth={true} duration={500}>
            <li>About</li>
          </Link>
          <Link to="/TouristicPlaces" smooth={true} duration={500}>
            <li>Touristic Places</li>
          </Link>
          <Link to="/history" smooth={true} duration={500}>
            <li>History</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
