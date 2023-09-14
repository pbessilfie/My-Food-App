/* eslint-disable react/prop-types */
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "/src/styles/Menu.css";
import MENUDATA from "/api/food-data";
import GenButton from "./button";
import { useState } from "react";

export default function Menu({ handleClick, handleFavItem, handleRemove }) {
  const [menuData, setMenuData] = useState(MENUDATA);

  // a function to handle the favorite status of a menu item
  const handleFavorite = (menuId) => {
    setMenuData((prevData) => {
      return prevData.map((menuItem) => {
        if (menuItem.id === menuId) {
          return { ...menuItem, favorite: !menuItem.favorite };
        }
        return menuItem;
      });
    });
  };

  const menu = menuData.map((item) => (
    <div className="menu--card" key={item.id}>
      <div className="card--image">
        <img src={item.foodImageSrc} alt={item.foodName} />
        <FaHeart
          className={`favorite ${item.favorite ? "active" : ""}`}
          style={{ color: item.favorite ? "rgba(14, 250, 14)" : "white" }}
          onClick={() => {
            if (!item.favorite) {
              handleFavItem(item);
            }
            if (item.favorite) {
              handleRemove(item.id);
            }

            handleFavorite(item.id);
          }}
        />
      </div>

      <div className="menu--card--text">
        <h3 className="food--name">{item.foodName}</h3>
        <p className="food--description">{item.foodDescription}</p>
        <h4 className="food--price">${item.price}.00</h4>
      </div>

      <div className="food--rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <GenButton
        label="Add to Cart"
        handleClick={(event) => {
          handleClick(item);
          event.preventDefault();
        }}
      />
    </div>
  ));

  return (
    <>
      <section className="menu--wrapper" id="menu">
        <h1 className="menu--title">
          Our <span>Menu</span>
        </h1>
        <div className="menu--container">{menu}</div>
      </section>
    </>
  );
}
