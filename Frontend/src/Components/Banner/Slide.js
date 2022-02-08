import React,{useEffect} from 'react';
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'
import slide1 from './banner.png'
import slide3 from './b2.jpg'
import slide4 from './b3.jpg'
import slide5 from './b4.jpg'
import slide6 from './b5.jpg'

import './banner.css'
import { Parallax } from 'react-parallax';
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
                    <h1 data-aos="fade-up">The Fath Started from 1993</h1>
                </div>
              </Parallax>
           
               <Parallax className='single-banner' blur={1} bgImage={slide3} strength={400} className='single-banner' bgImage={slide1} >
                  <div className='overlay'>
                        <h1 data-aos="fade-up">Completed Over 1000+ Project Around The World</h1>
                  </div>
                </Parallax>


                <Parallax className='single-banner' blur={1} bgImage={slide3} strength={400} className='single-banner' bgImage={slide1} >
                  <div className='overlay'>
                      <h1 data-aos="fade-up">600+ Experienced Employers</h1>
                  </div>
                </Parallax>

                <Parallax className='single-banner' blur={1} bgImage={slide4} strength={400} className='single-banner' bgImage={slide1} >
                  <div className='overlay'>
                      <h1 data-aos="fade-up">ALL Sevice Under the Same Roof</h1>
                  </div>
                </Parallax>

                <Parallax className='single-banner' blur={1} bgImage={slide5} strength={400} className='single-banner' bgImage={slide1} >
                  <div className='overlay'>
                     <h1 data-aos="fade-up">Just in Time Handover </h1>
                  </div>
                </Parallax>

                <Parallax className='single-banner' blur={1} bgImage={slide6} strength={400} className='single-banner' bgImage={slide1} >
                  <div className='overlay'>
                     <h1 data-aos="fade-up"> Book your Appointment Now </h1>
                  </div>
                </Parallax>
               
      </Slider>
    </div>

    )
  };
  export default Slide;