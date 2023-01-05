import { useState } from "react";
import "./App.css";
import BackCard from "./components/BackCard";
import FormCard from "./components/FormCard";
import FrontCard from "./components/FrontCard";

function App() {

  const [checkForm, setCheckForm] = useState(false)
  const [formCard, setFormCard] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <div className="App">
      <div className="App__bg">

      </div>
      <section className="section__cards">
        <FrontCard formCard={formCard} />
        <BackCard formCard={formCard} />
      </section>
      <section className="section__form">
        <FormCard formCard={formCard} setFormCard={setFormCard} />
      </section>
      <section className="section__checkout"></section>
    </div>
  );
}

export default App;
