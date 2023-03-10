import { useState } from "react";
import "./App.css";
import BackCard from "./components/BackCard";
import CheckoutForm from "./components/CheckoutForm";
import FormCard from "./components/FormCard";
import FrontCard from "./components/FrontCard";

const initialValues = {
  name: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
};
function App() {
  const [checkAnimationForm, setCheckAnimationForm] = useState(false);
  const [checkForm, setCheckForm] = useState(false);

  const [formCard, setFormCard] = useState(initialValues);

  console.log(checkAnimationForm);

  const handleCheckout = () => {
    setCheckAnimationForm(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setFormCard(initialValues);
      setCheckForm(!checkForm);
      setCheckAnimationForm(false);
    }, 600);
    setTimeout(() => (document.body.style.overflow = "auto"), 1200);
  };
  return (
    <div className="App">
      <div
        className={`App__bg ${checkAnimationForm && "App__bg--checkout"}`}
      ></div>
      <div
        className={`App__bg--mobile ${
          checkAnimationForm && "App__bg--checkout-mobile"
        }`}
      ></div>
      <section className="section__cards">
        <FrontCard formCard={formCard} />
        <BackCard formCard={formCard} />
      </section>
      <section
        className={`section__form ${
          checkAnimationForm && "section__form--checkout"
        }`}
      >
        {!checkForm ? (
          <FormCard
            handleCheckout={handleCheckout}
            formCard={formCard}
            setFormCard={setFormCard}
          />
        ) : (
          <CheckoutForm handleCheckout={handleCheckout} />
        )}
      </section>
    </div>
  );
}

export default App;
