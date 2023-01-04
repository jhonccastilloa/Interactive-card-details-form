import React from 'react'
import './style/backCard.css'

const BackCard = ({formCard}) => {
  return (
    <div className='card backCard'>
        <span>{formCard.cvc}</span>
    </div>
  )
}

export default BackCard