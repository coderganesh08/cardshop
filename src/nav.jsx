import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { LiaOpencart } from "react-icons/lia";

const Nav = ({ toggleCart, cartCount }) => {
  const [showMenu, setshowMenu] = useState(false);

  const handelButtonToggle = () => setshowMenu(!showMenu);

  return (
    <header
      style={{
        backgroundImage: "url('navbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>
              <TbToolsKitchen3 /> Hmeal
            </h1>
          </div>
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
            
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="nav-icons">
            <button className="cart" onClick={toggleCart}>
              <LiaOpencart />
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </button>
            <button className="ham-menu" onClick={handelButtonToggle}>
              <FaHamburger />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
