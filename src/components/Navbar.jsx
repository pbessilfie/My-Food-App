import { useState } from "react";

import "/src/styles/Navbar.css";
import { FaBars, FaSearch, FaHeart, FaCartArrowDown } from "react-icons/fa";
import websiteLogo from "/website-logo.png";
import Cart from "./Cart";
import FavoriteItem from "./FavoriteItem";

export default function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const { size, size0fav, cart, setCart, favorite, setFavorite, handleRemove } =
    props;
  const [searchBar, setSearchBar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isOpenFav, setIsOpenFav] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
            <button
              className="nav--btn"
              style={{ position: "relative" }}
              onClick={() => {
                setIsOpenFav(!isOpenFav);

                if (isVisible) {
                  return setIsVisible(!isVisible);
                }
              }}
            >
              <FaHeart />
              <span
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "-8px",
                  zIndex: "3",
                  color: "#fff",
                  backgroundColor: "green",
                  fontSize: "10px",
                  padding: "1px 4px",
                  borderRadius: "50%",
                }}
              >
                {size0fav}
              </span>
            </button>
            <button
              className="nav--btn"
              onClick={() => {
                setIsVisible(!isVisible);

                if (isOpenFav) {
                  setIsOpenFav(!isOpenFav);
                }
              }}
              style={{ position: "relative" }}
            >
              <FaCartArrowDown />
              <span
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "-8px",
                  zIndex: "3",
                  color: "#fff",
                  backgroundColor: "green",
                  fontSize: "10px",
                  padding: "1px 4px",
                  borderRadius: "50%",
                }}
              >
                {size}
              </span>
            </button>
            <button
              className="nav--btn menu--btn"
              onClick={() => {
                setNavbar(!navbar);
                if (isOpenFav) {
                  setIsOpenFav(!isOpenFav);
                }
                if (isVisible) {
                  return setIsVisible(!isVisible);
                }
              }}
            >
              <FaBars />
            </button>
          </div>
        </nav>
        {isOpenFav && (
          <FavoriteItem
            favorite={favorite}
            setFavorite={setFavorite}
            isOpenFav={isOpenFav}
            setIsOpenFav={setIsOpenFav}
            handleRemove={handleRemove}
          />
        )}
        {isVisible && <Cart cart={cart} setCart={setCart} />}
      </header>
    </>
  );
}
