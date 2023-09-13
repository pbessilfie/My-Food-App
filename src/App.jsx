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
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (!isPresent) {
      setWarning(!warning);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      setCart([...cart, item]);
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
  return (
    <>
      <Navbar size={cart.length} cart={cart} setCart={setCart} />
      <div style={backgroundStyle}></div>
      <div style={Style}>
        <div className="website--main--container">
          <Hero />
          <Menu handleClick={handleClick} />
          <Gallery />
          <OrderForm />
        </div>
      </div>
    </>
  );
}
