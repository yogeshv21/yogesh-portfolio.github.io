import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constents";
import { HiMenuAlt4, HiX } from "react-icons/hi";

function Navbar() {
  const [toggel, settoggel] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}> {item} </a>
          </li>
        ))}
      </ul>
        <div className="app__menu-icon"><HiMenuAlt4 onClick={() => settoggel(true)} /></div>
      <div className="app__navbar-menu" style={{right: toggel ? '0': '-100%'}}>
         <div className="app__close-icon"><HiX onClick={() => settoggel(false)} /></div>
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <div />
                  <a href={`#${item}`} onClick={() => settoggel(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
      </div>
    </nav>
  );
}

export default Navbar;
