import { useState } from "react";
import "/src/styles/Order.css";
import GenButton from "./button";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerContact: "",
    order: "",
    additionalOrder: "",
    quantity: "",
    orderDate: "",
    customerAddress: "",
    customerMessage: "",
  });
  console.log(formData);
  const handleOrder = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const submitOrder = (event) => {
    event.preventDefault();
  };
  return (
    <section className="order--wrapper">
      <h1 className="order--wrapper--heading">
        <span>Order</span> Now
      </h1>
      <h3 className="">FREE AND FAST</h3>

      <div className="form--container">
        <form className="order--form--box" onSubmit={submitOrder}>
          <div className="order--input--box">
            <label htmlFor="customer-name">Your Name</label>
            <input
              className="input"
              onChange={handleOrder}
              id="customer-name"
              type="text"
              value={formData.customerName}
              name="customerName"
              placeholder="enter your name"
            />
          </div>
          <div className="order--input--box">
            <label htmlFor="customer-contact">Your Contact</label>
            <input
              className="input"
              onChange={handleOrder}
              id="customer-contact"
              type="tel"
              value={formData.customerContact}
              name="customerContact"
              placeholder="enter your number"
            />
          </div>
          <div className="order--input--box">
            <label htmlFor="customer-order">Your Order</label>
            <input
              className="input"
              onChange={handleOrder}
              id="customer-order"
              type="text"
              value={formData.order}
              name="order"
              placeholder="enter food name"
            />
          </div>

          <div className="order--input--box">
            <label htmlFor="additional-order">Additional Food</label>
            <input
              className="input"
              onChange={handleOrder}
              id="additional-order"
              type="text"
              value={formData.additionalOrder}
              name="additionalOrder"
              placeholder="extra food"
            />
          </div>

          <div className="order--input--box">
            <label htmlFor="order-quatity">How Much</label>
            <input
              className="input"
              onChange={handleOrder}
              id="order-quatity"
              type="number"
              value={formData.quantity}
              name="quantity"
              placeholder="how many orders"
            />
          </div>

          <div className="order--input--box">
            <label htmlFor="order-date">Date and Time</label>
            <input
              className="input"
              onChange={handleOrder}
              id="order-date"
              type="datetime-local"
              value={formData.orderDate}
              name="orderDate"
            />
          </div>

          <div className="order--input--box">
            <label htmlFor="customer-address">Your Address</label>
            <textarea
              className="input"
              onChange={handleOrder}
              id="customer-address"
              value={formData.customerAddress}
              name="customerAddress"
              placeholder="enter your address"
              rows="10"
              cols="20"
            />
          </div>

          <div className="order--input--box">
            <label htmlFor="customer-message">Your Message</label>
            <textarea
              className="input"
              onChange={handleOrder}
              id="customer-message"
              value={formData.customerMessage}
              name="customerMessage"
              placeholder="enter your message"
              rows="10"
              cols="20"
            />
          </div>
          <GenButton label="Order" backgroundColor="rgb(14, 132, 14)" />
        </form>
      </div>
    </section>
  );
}
