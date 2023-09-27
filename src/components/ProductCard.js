import React from 'react'

const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className='product-card'>
            <div className='product-image'>
                <img src='images/watch.jpg' alt='productimage'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>Kids headphones bulk 10 multi colored for students</h5>
            </div>
        </div>
    </div>
  )
}

export default ProductCard