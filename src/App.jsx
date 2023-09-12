import "./App.css";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import MenuCards from "./components/Menu";
import Navbar from "./components/Navbar";
import OrderForm from "./components/Order";
import bg_img from "/bg-img.jpg";

export default function App() {
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
      <Navbar />
      <div style={backgroundStyle}></div>
      <div style={Style}>
        <div className="website--main--container">
          <Hero />
          <MenuCards />
          <Gallery />
          <OrderForm />
        </div>
      </div>
    </>
  );
}
