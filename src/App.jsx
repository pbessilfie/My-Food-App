import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import OrderForm from "./components/Order";
import bg_img from "/bg-img.jpg";

export default function App() {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
        setWarning(!warning);
        setTimeout(() => {
          setWarning(false);
        }, 2000);
      }
    });
    if (!isPresent) {
      setCart([...cart, item]);
    }
  };

  const handleFavItem = (item) => {
    let isPresent = false;
    favorite.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (!isPresent) {
      setFavorite([...favorite, item]);
    }
    console.log(item);
  };
  const backgroundStyle = {
    backgroundImage: `url(${bg_img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    zIndex: -1,
    overflowX: "hidden",
  };
  const Style = {
    width: "100%",
    backdropFilter: "blur(7px)",
  };
  const handleRemove = (id) => {
    const arr = favorite.filter((item) => item.id !== id);
    setFavorite(arr);
  };
  return (
    <>
   
      <Navbar
        size={cart.length}
        cart={cart}
        setCart={setCart}
        size0fav={favorite.length}
        favorite={favorite}
        setFavorite={setFavorite}
        handleRemove={handleRemove}
      />
      {warning && (
        <h1
          style={{
            zIndex: "30",
            position: "fixed",
            top: "75px",
            right: "2px",
            fontSize: "15px",
            color: "red",
            backgroundColor: "white",
            padding: "5px",
            border: "2px solid red",
          }}
        >
          Item Already in cart
        </h1>
      )}
      <div style={backgroundStyle}></div>
      <div style={Style}>
        <div className="website--main--container">
          <Hero />
          <Menu
            handleClick={handleClick}
            handleFavItem={handleFavItem}
            handleRemove={handleRemove}
          />
          <Gallery />
          <OrderForm />
        </div>
      </div>
    </>
  );
}
