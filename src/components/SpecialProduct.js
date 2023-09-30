import React, { Component, useState } from 'react';
import StarRatings from 'react-star-ratings';

const SpecialProduct = () => {
    const [rating, setRating] = useState(0);

  // Define the changeRating function
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className='pimage'>
                    <img src='images/watch-1.jpeg'  alt='watch'></img>
                </div>
                <div className='special-product-content'>
                    <h6 className='brand'>Havels</h6>
                    <h7 className='title'>Samsung Galaxy Note10+ Mobile Phone; Sim...</h7>
                    <StarRatings
                        rating={rating} // Set the rating value from state
                        starRatedColor="gold"
                        changeRating={changeRating} // Use the local changeRating function
                        numberOfStars={5}
                        name='rating'
                        starDimension="12px"
                        starSpacing="0px"
                        edit={false}
                    />
                    <p className='price'>
                        <span className='red-p'>$100</span> <strike> $200</strike>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct