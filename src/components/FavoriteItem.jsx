/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "/src/styles/favorite-item.css";
import { FaTimes } from "react-icons/fa";
function FavoriteItem({
  favorite,
  setFavorite,
  isOpenFav,
  setIsOpenFav,
  handleRemove,
}) {
  const favoriteItems = favorite.map((item, index) => {
    return (
      <div className="fav--content" key={index}>
        <div className="fav--image--box">
          <img src={item.foodImageSrc} alt={item.foodName} />
        </div>
        <div className="fav--item--details">
          <h3>{item.foodName}</h3>
          <p>{item.foodDescription}</p>
          <span>${item.price}.00</span>
        </div>
        <button
          style={{
            position: "absolute",
            top: "4%",
            right: "3%",
            background: "none",
            border: "0",
            fontSize: "20px",
            color: "lawngreen",
            cursor: "pointer",
          }}
          onClick={() => {
            handleRemove(item.id);
          }}
        >
          <FaTimes />
        </button>
      </div>
    );
  });
  return (
    <div
      className="fav--wrapper"
    //   onClick={() => {
    //     setIsOpenFav(!isOpenFav);
    //   }}
    >
      <div
        className="fav--container"
       
      >
        <h1 className="fav--container--heading">Favorite Recipes</h1>
        {favoriteItems}
      </div>
    </div>
  );
}

export default FavoriteItem;
