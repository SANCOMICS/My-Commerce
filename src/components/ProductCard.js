import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const ProductCard = () => {
    // Use state to track the rating
  const [rating, setRating] = useState(0);

  // Define the changeRating function
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className='col-3'>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                <img src='images/wish.svg' alt='wishlist'></img>
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/watch.jpg' className='image-fluid' alt='productimage'/>
                <img src='images/watch-1.jpeg' className='image-fluid' alt='productimage'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>Kids headphones bulk 10 multi colored for students
                </h5>
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
                <p className='price'>$100.00</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link>
                    <img src='images/prodcompare.svg' alt='compare'></img>
                    </Link>
                    <Link>
                    <img src='images/view.svg' alt='view'></img>
                    </Link>
                    <Link>
                    <img src='images/add-cart.svg' alt='addcart'></img>
                    </Link>

                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard