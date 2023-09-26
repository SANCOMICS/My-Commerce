import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
      <div className='blog-card'>
        <div className='card-image'>
          <img src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
        </div>
        <div className='blog-content'>
          <p className='date'>11 JUNE 2022</p>
          <h5 className='title'>A Beautiful Sunday Renaissance</h5>
          <p className='desc'>You're only as good as you're last collection, which is an enormous pressure</p>
          <Link to='/' className='button btntx' >Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard