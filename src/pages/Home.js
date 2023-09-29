import React from 'react'
import{Link} from 'react-router-dom'
// import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-4'>
        <div className='container-xxl'>
          <div className='row px-3'>
            <div className='col-6'>
              <div className='small-banner position-relative p-1'>
                <img src='images/main-banner-1.jpg' 
                  className='image-fluid rounded-3 mainbPic'
                alt='main banner' />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className='button' >BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
             <div className='d-flex flex-wrap justify-content-between align-items-center'>
             <div className='main-banner position-relative p-1'>
                <img src='images/catbanner-01.jpg' 
                  className='image-fluid rounded-3 mainb'
                alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or<br/> $64.62/mo</p>
                  
                </div>
              </div>
              <div className='main-banner position-relative p-1'>
                <img src='images/catbanner-03.jpg' 
                  className='image-fluid rounded-3 mainb'
                alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $599.00 or<br/> $49.91/mo for 12 mo. *</p>
                  
                </div>
              </div>
              <div className='main-banner position-relative p-1'>
                <img src='images/catbanner-02.jpg' 
                  className='image-fluid rounded-3 mainb'
                alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest band<br/> styles and colors.</p>

                </div>
              </div>
              <div className='main-banner position-relative p-1'>
                <img src='images/catbanner-04.jpg' 
                  className='image-fluid rounded-3 mainb'
                alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback &<br/> ultra-low distortion</p>
                  
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
        

      </section>
      <section className='home-wrapper-2 py-4 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-9'>
              <div className='services d-flex align-items-center justify-content-between gap-15'>
                <div className='d-flex align-items-center gap-10 col-3 '>
                  <img src='images/service.png' alt='services'  />
                  <div>
                    <h6 className='reds'>Free Shipping</h6>
                    <p className='mb-0 redsp'>From all orders over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10 col-3'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6 className='reds'>Daily Suprise Offers</h6>
                    <p className='mb-0 redsp'>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10 col-3'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6 className='reds'>Support 24/7</h6>
                    <p className='mb-0 redsp'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10 col-3'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6 className='reds'>Affordable Prices</h6>
                    <p className='mb-0 redsp'>Get factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10 col-3'>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6 className='reds'>Secure Payments</h6>
                    <p className='mb-0 redsp'>100% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-contents-between align-items-center'>
                <div className='d-flex gap-15 align-items-center'>
                    <div>
                      <h6>Music & Gaming</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/headphone.jpg' alt='camera'></img>
                  </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'></img>
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera'></img>
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/watch.jpg' alt='camera'></img>
                </div>

                <div className='d-flex gap-15 align-items-center'>
                    <div>
                      <h6>Music & Gaming</h6>
                      <p>10 Items</p>
                    </div>
                    <img src='images/headphone.jpg' alt='camera'></img>
                  </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'></img>
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera'></img>
                </div>
                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/watch.jpg' alt='camera'></img>
                </div>
                

              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='featured-wrapper py-5 home-wrapper-2 marg'>
        <div className='container-xxl'>
          <div className='row '>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          </div>
        </div>
      </section>
      
      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <marquee> 
                  <div className='d-flex'>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-01.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-02.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-03.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-04.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-05.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-06.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-07.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-08.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-01.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-02.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-03.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-04.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-05.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-06.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-07.png' alt='brand'></img>
                    </div>
                    <div className='mx-4 w-25'>
                      <img src='images/brand-08.png' alt='brand'></img>
                    </div>
                  </div>
                  
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2  marg'>
        <div className='container-xxl'>
          <div className='row '>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest News</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
