import React from 'react'

const FrontCard = ({formCard}) => {
    console.log(formCard)
  return (
    <div className='card frontCard'>
        <div className='card__circle'><i className="fa-thin fa-circle"></i><i className="fa-sharp fa-solid fa-circle"></i></div>
        <p><span className='card__number'>{formCard.number}</span></p>
        <div className='card__aditional'><span className='card__name'>{formCard.name} </span> <span className='card__date'>{formCard.month}/{formCard.year}</span></div>
    </div>
  )
}

export default FrontCard