import React,{useEffect} from 'react';
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'
import slide1 from '../../Images/slide1.jpg'
import slide3 from '../../Images/slide2.jpg'
import slide4 from '../../Images/slide3.jpg'
import slide5 from '../../Images/slide1.jpg'
import slide6 from '../../Images/slide2.jpg'

import './banner.css'
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

  const Slide= () => {

 

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: <SamplePrevArrow/>,
      nextArrow: <SampleNextArrow />,
      speed: 2000,

    };
    return (
      <div className='all-banner'>
      <Slider {...settings}>
       
          
              <Parallax blur={1} strength={400} className='single-banner' bgImage={slide1} >
                <div className='overlay'>
                    <div className='inoverlay'> 
                        <div className='leftb'></div>
                        <div className='rightb'></div>
                        <h1>We are <span>Advance</span> <br/> and Right for the work</h1>
                        <p>lorem Ipsum available, but the majority have suffered</p>
                        <Link to="/" > OUR SERVICE </Link>
                    </div>
                </div>
              </Parallax>
              <Parallax blur={1} strength={400} className='single-banner' bgImage={slide5} >
                <div className='overlay'>
                    <div className='inoverlay'> 
                        <div className='leftb'></div>
                        <div className='rightb'></div>
                        <h1>We are professional <br/><span>Quality</span> Services</h1>
                        <p>lorem Ipsum available, but the majority have suffered</p>
                        <Link to="/" > OUR SERVICE </Link>
                    </div>
                </div>
              </Parallax>
              <Parallax blur={1} strength={400} className='single-banner' bgImage={slide3} >
                <div className='overlay'>
                    <div className='inoverlay'> 
                        <div className='leftb'></div>
                        <div className='rightb'></div>
                        <h1>We are <span>Advance</span> <br/> and Right for the work</h1>
                        <p>lorem Ipsum available, but the majority have suffered</p>
                        <Link to="/" > OUR SERVICE </Link>
                    </div>
                </div>
              </Parallax>
              <Parallax blur={1} strength={400} className='single-banner' bgImage={slide4} >
                <div className='overlay'>
                    <div className='inoverlay'> 
                        <div className='leftb'></div>
                        <div className='rightb'></div>
                        <h1>We are <span>Advance</span> <br/> and Right for the work</h1>
                        <p>lorem Ipsum available, but the majority have suffered</p>
                        <Link to="/" > OUR SERVICE </Link>
                    </div>
                </div>
              </Parallax>



               
      </Slider>
    </div>

    )
  };
  export default Slide;