import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub,BsYoutube,BsInstagram, } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-2'>
      <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className='mb-0 text-white fs-4'>Sign Up for Newsletter</h2>
            </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                  <input
                    type="text"
                    className="form-control inrect "
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text inrect" id="basic-addon2">
                    Subscribe
                  </span>
                </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
      <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-29 '>
                  Hno : BP 124 Kumba<br />
                  Southwest, Cameroon<br />
                  Code: 00000
                </address>
                <a href='tel: +237 680014322' className='mt-4 d-block mb-1 text-white'>+237 680014322</a>
                <a href='mailto: sancomics@gmail.com' className='mt-4 d-block mb-0 text-white'>sancomics@gmail.com</a>

                <div className='social_icons d-flex align-items-center gap-15 mt-4'>
                  <a className='text-white' href=''>
                    <BsLinkedin className='fs-7'/></a>
                  <a className='text-white' href=''>
                    <BsInstagram className='fs-7'/></a>
                  <a className='text-white' href=''>
                    <BsGithub className='fs-7'/></a>
                  <a className='text-white' href=''>
                    <BsYoutube className='fs-7'/></a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms and Condition</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-0'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 mb-0 text-white'>
              <p className='text-center datefoot'>&copy; {new Date().getFullYear()}, powered by Sancomics
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
