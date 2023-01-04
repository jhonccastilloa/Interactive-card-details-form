import React from 'react'
import './style/backCard.css'

const BackCard = ({formCard}) => {
  return (
    <div className='card backCard'>
        <span className='backCard__span'>{formCard.cvc?formCard.cvc:"000"}</span>
    </div>
  )
}

export default BackCard