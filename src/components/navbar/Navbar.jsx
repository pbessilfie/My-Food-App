import { useState } from "react";

import "./Navbar.css";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaCartArrowDown,
} from "react-icons/fa";
import websiteLogo from "/website-logo.png";

export default function Navbar() {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <>
      <header className="navbar">
        <nav className="nav--content">
          <img src={websiteLogo} alt="food logo" className="nav--logo" />
          <div className="navigation--links">
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
            <button className="nav--btn">
              <FaCartArrowDown />
            </button>
            <button className="nav--btn">
              <FaBars />
            </button>
            <button className="nav--btn close">
              <FaTimes visibility="hidden" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
