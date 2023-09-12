import { useState } from "react";

import "/src/styles/Navbar.css";
import { FaBars, FaSearch, FaHeart, FaCartArrowDown } from "react-icons/fa";
import websiteLogo from "/website-logo.png";
import Cart from "./Cart";

export default function Navbar() {
  const [searchBar, setSearchBar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const shoppingCartVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <header className="navbar">
        <nav className="nav--content">
          <img src={websiteLogo} alt="food logo" className="nav--logo" />
          <div className={!navbar ? "navigation--links" : "nav-active"}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Menu</a>
            <a href="">Gallery</a>
            <a href="">Review</a>
            <a href="">Order</a>
          </div>

          <div className="navigation--icons">
            <div className="search--box">
              <input
                type="search"
                placeholder="Search..."
                id={!searchBar ? "search" : "active"}
              />
              <button
                className="search--btn"
                onClick={() => {
                  setSearchBar(!searchBar);
                }}
              >
                <FaSearch />
              </button>
            </div>
            <button className="nav--btn">
              <FaHeart />
            </button>
            <button className="nav--btn" onClick={shoppingCartVisibility}>
              <FaCartArrowDown />
            </button>
            <button
              className="nav--btn menu--btn"
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              <FaBars />
            </button>
          </div>
        </nav>
        {isVisible && <Cart />}
      </header>
    </>
  );
}
