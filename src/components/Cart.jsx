/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import "/src/styles/cart.css";
import GenButton from "./button";
import { useState, useEffect } from "react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let totalPrice = 0;
    cart.map((item) => {
      totalPrice += item.amount * item.price;
    });
    setPrice(totalPrice);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const increaseOrderAmount = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    });
  };

  const decreaseOrderAmount = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount === 1 ? 1 : item.amount - 1 };
        }
        return item;
      });
    });
  };

  useEffect(() => handlePrice());

  const cartItems = cart.map((item) => {
    return (
      <div className="cart--content" key={item.id}>
        <div className="cart--image--box">
          <img src={item.foodImageSrc} />
        </div>
        <div className="food--details">
          <span className="food--name">{item.foodName}</span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <span className="food--price">${item.price}.00</span>
            <div
              className="quantity--box"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className="item--count"
                onClick={() => decreaseOrderAmount(item.id)}
              >
                -
              </button>
              <span
                style={{
                  padding: "0 10px",
                  color: "#fff",
                  background: "green",
                  fontWeight: "500",
                  fontSize: "10px",
                }}
              >
                {item.amount}
              </span>
              <button
                className="item--count"
                onClick={() => increaseOrderAmount(item.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button id="cart--remove--btn" onClick={() => handleRemove(item.id)}>
          <FaTimes />
        </button>
      </div>
    );
  });
  console.log(cartItems);
  return (
    <div className="cart--container">
      <h1 className="cart--heading">Shopping Cart</h1>
      <div style={{ marginTop: "20px",overflowY:'scroll',height:'80%' }}> {cartItems}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "70px",
          marginTop: "30px",
        }}
      >
        <div className="cart--total--order--price">
          <span className="total">Total Price</span>
          <span className="total--amount">{price}</span>
        </div>
        <GenButton backgroundColor="green" label="Place Order" />
      </div>
    </div>
  );
};

export default Cart;
