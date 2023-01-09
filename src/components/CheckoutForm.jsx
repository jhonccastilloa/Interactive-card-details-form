import React from "react";
import "./style/checkoutForm.css";

const CheckoutForm = ({ handleCheckout }) => {
  const handleClick = () => handleCheckout();

  return (
    <div className="checkout">
      <figure className="checkout__figure">
        <img src="/icon-complete.svg" alt="" />
      </figure>
      <h2 className="checkout__title">THANK YOU!</h2>
      <p className="checkout__text">we've added your card details</p>
      <button className="form__confirm" onClick={handleClick}>
        Continue
      </button>
    </div>
  );
};

export default CheckoutForm;
