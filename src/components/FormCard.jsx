import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./style/formCard.css";

const FormCard = ({ formCard, setFormCard }) => {
  const [formValidate, setFormValidate] = useState();
  const [buttoError, setButtoError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "number")
      e.target.value = value
        .replace(/[^0-9]/g, "")
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    if (name == "month" || name == "year")
      e.target.value = value.replace(/[^0-9]/g, "").substring(0, 2);
    if (name == "month" && value > 12) e.target.value = 12;

    if (name == "cvc")
      e.target.value = value.replace(/[^0-9]/g, "").substring(0, 4);
    setFormCard({
      ...formCard,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    console.log(error);
    if (Object.entries(error).length !== 0) {
      setFormValidate(error);
      setButtoError(true);
      setTimeout(() => setButtoError(false), 500);
    } else {
      setFormValidate();
      console.log("se enviara conrrectamente");
    }
  };

  const validateForm = () => {
    const error = {};
    if (!formCard.name) {
      error.name = "Can`t be blank";
    }
    if (!formCard.number) {
      error.number = "Can`t be blank";
    } else if (formCard.number.length < 19) {
      error.number = "Number is too short";
    }
    if (!formCard.month) {
      error.month = "Can`t be blank";
    } else if (formCard.month.length < 2) {
      error.month = "Number is too short";
    }
    if (!formCard.year) {
      error.year = "Can`t be blank";
    } else if (formCard.year.length < 2) {
      error.year = "Number is too short";
    }

    if (!formCard.cvc) {
      error.cvc = "Can`t be blank";
    } else if (formCard.number.length < 4) {
      error.date = "Number is too short";
    }

    return error;
  };

  console.log(formValidate && Object.entries(formValidate).length == 0);

  console.log(buttoError);
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          CARDHOLDER NAME
        </label>
        <input
          className={`form__input ${formValidate?.name && "line--error"}`}
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={formCard.name}
        />
        {formValidate?.name && (
          <p className="form__error">{formValidate.name}</p>
        )}
      </div>
      <div className="form__group">
        <label htmlFor="number" className="form__label">
          CARD NUMBER
        </label>
        <input
          className={`form__input ${formValidate?.number && "line--error"}`}
          id="number"
          type="text"
          placeholder="e.g 1234 5678 9123 0000"
          name="number"
          onChange={handleChange}
          value={formCard.number}
        />
        {formValidate?.number && (
          <p className="form__error">{formValidate.number}</p>
        )}
      </div>
      <div className="form__group-aditional">
        <div className="form__group form__group--date">
          <label htmlFor="month" className="form__label">
            EXP. DATE (MM/YY)
          </label>
          <div className="form__inputs">
            <input
              id="month"
              className={`form__input ${formValidate?.month && "line--error"}`}
              name="month"
              type="text"
              placeholder="MM"
              onChange={handleChange}
              value={formCard.month}
            />

            <input
              className={`form__input ${formValidate?.year && "line--error"}`}
              name="year"
              type="text"
              placeholder="YY"
              onChange={handleChange}
              value={formCard.year}
            />
          </div>
          {(formValidate?.month || formValidate?.year) && (
            <p className="form__error">{formValidate.month ||formValidate.year}</p>
          )}
        </div>
        <div className="form__group form__group--cvc ">
          <label htmlFor="cvc" className="form__label">
            CVC
          </label>
          <input
            id="cvc"
            className={`form__input ${formValidate?.cvc && "line--error"}`}
            name="cvc"
            type="text"
            placeholder="e.g. 123"
            onChange={handleChange}
            value={formCard.cvc}
          />
          {formValidate?.cvc && (
            <p className="form__error">{formValidate.cvc}</p>
          )}
        </div>
      </div>
      <button
        className={`form__confirm ${buttoError && "vibracion button--error"}`}
      >
        Confirm
      </button>
    </form>
  );
};
export default FormCard;
