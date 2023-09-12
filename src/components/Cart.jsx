import { FaTimes } from "react-icons/fa";
import "/src/styles/cart.css";
import GenButton from "./button";

const Cart = () => {
  return (
    <div>
      <div className="cart--container">
        <h1 className="cart--heading">Shopping Cart</h1>
        <div style={{ marginTop: "30px" }}>
          <div className="cart--content">
            <div className="cart--image--box">
              <img src="/public/food-5.jpg" />
            </div>
            <div className="food--details">
              <span className="food--name">spaghetti</span>
              <span className="food--price">$40.00</span>
            </div>
            <button id="cart--remove--btn">
              <FaTimes />
            </button>
          </div>
          <div className="cart--content">
            <div className="cart--image--box">
              <img src="/public/food-5.jpg" />
            </div>
            <div className="food--details">
              <span className="food--name">spaghetti</span>
              <span className="food--price">$40.00</span>
            </div>
            <button id="cart--remove--btn">
              <FaTimes />
            </button>
          </div>
          <div className="cart--content">
            <div className="cart--image--box">
              <img src="/public/food-5.jpg" />
            </div>
            <div className="food--details">
              <span className="food--name">spaghetti</span>
              <span className="food--price">$40.00</span>
            </div>
            <button id="cart--remove--btn">
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="cart--total--order--price">
          <span className="total">Total</span>
          <span className="total--amount">$40.00</span>
        </div>
        <GenButton backgroundColor='green' label='Place Order'/>
      </div>
    </div>
  );
};

export default Cart;
