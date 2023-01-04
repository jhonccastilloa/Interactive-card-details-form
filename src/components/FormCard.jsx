import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormCard = ({formCard,setFormCard}) => {
  
  const handleChange = e =>{
    setFormCard(
      {
        ...formCard,[e.target.name]:e.target.value
      }
    )
  }
  

  return (
    <form>
      <div>
        <label htmlFor="">CARDHOLDER NAME</label>
        <input id='name' name='name' onChange={handleChange} type="text"  placeholder="e.g. Jane Appleseed" />
      </div>
      <div>
        <label htmlFor="">CARD NUMBER</label>
        <input
          type="text"
          minLength={16}
          maxLength={16}
          placeholder="e.g 1234 5678 9123 0000"
          name="number"
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="">EXP. DATE (MM/YY)</label>
          <input name="month" type="text" placeholder="MM" onChange={handleChange}/>
          <input name="year" type="text" placeholder="YY" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="">CVC</label>
          <input name="cvc" type="text" placeholder="e.g. 123" onChange={handleChange}/>
        </div>
      </div>
      <button>Confirm</button>
    </form>
  );
};
export default FormCard;
