import React, { Component, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
    const [rating, setRating] = useState(0);

  // Define the changeRating function
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className='col-6 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className='pimage'>
                    <img src='images/watch-1.jpeg' className='image-fluid'  alt='watch'></img>
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
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>5 </b>days
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                            <span className='badge rounded-circle p-2 bg-danger'>1</span> 
                        </div>   
                    </div>
                    <div className='prod-count my-3'>
                        <p>Products: 5</p>
                        <div className="progress">
                            <div className="progress-bar" 
                                role="progressbar" 
                                style={{"width":"25%" }}
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100">

                            </div>
                        </div>
                    </div>
                    <Link className='button pmag'>Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct