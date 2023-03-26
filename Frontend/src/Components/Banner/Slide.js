import React, { useEffect } from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import slide1 from "../../Images/slide1.jpg";
import slide3 from "../../Images/slide2.jpg";
import slide4 from "../../Images/slide3.jpg";
import slide5 from "../../Images/slide1.jpg";
import slide6 from "../../Images/slide2.jpg";
import "./banner.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const BgElement = Element.BgElement;

const Slide = () => {
  return (
    <div className="all-banner">
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element
          prefixCls="banner-user-elem"
          key="0"
          followParallax={{
            delay: 1000,
            data: [
              // { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
              { id: "title", value: 50, type: "x" },
              { id: "content", value: -30, type: "x" },
            ],
          }}
        >
          <TweenOne
            id="title"
            className="banner-user-title"
            animation={{ y: 100, opacity: 0, type: "from" }}
          >
            <h1>
              We are <span>Advance</span> <br /> and Right for the work
            </h1>
          </TweenOne>
          <Parallax
            blur={1}
            strength={500}
            className="single-banner"
            bgImage={slide3}
          >
            <div className="overlay">
              <div className="inoverlay">
                <div className="leftb"></div>
                <div className="rightb"></div>
                <TweenOne
                  id="title"
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </TweenOne>
                <TweenOne
                  id="content"
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from", delay: 200 }}
                >
                  <p>
                    <Link to="/"> OUR SERVICE </Link>
                  </p>
                </TweenOne>
              </div>
            </div>
          </Parallax>
        </Element>

        <Element prefixCls="banner-user-elem" key="1">
          <Parallax
            blur={1}
            strength={500}
            className="single-banner"
            bgImage={slide1}
          >
            <div className="overlay">
              <div className="inoverlay">
                <div className="leftb"></div>
                <div className="rightb"></div>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from", delay: 200 }}
                >
                  <p>
                    <Link to="/"> OUR SERVICE </Link>
                  </p>
                </TweenOne>
              </div>
            </div>
          </Parallax>
        </Element>

        <Element prefixCls="banner-user-elem" key="2">
          <Parallax
            blur={1}
            strength={500}
            className="single-banner"
            bgImage={slide6}
          >
            <div className="overlay">
              <div className="inoverlay">
                <div className="leftb"></div>
                <div className="rightb"></div>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from", delay: 200 }}
                >
                  <p>
                    <Link to="/"> OUR SERVICE </Link>
                  </p>
                </TweenOne>
              </div>
            </div>
          </Parallax>
        </Element>

        <Element prefixCls="banner-user-elem" key="3">
          <Parallax
            blur={1}
            strength={500}
            className="single-banner"
            bgImage={slide5}
          >
            <div className="overlay">
              <div className="inoverlay">
                <div className="leftb"></div>
                <div className="rightb"></div>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 100, opacity: 0, type: "from", delay: 200 }}
                >
                  <p>
                    <Link to="/"> OUR SERVICE </Link>
                  </p>
                </TweenOne>
              </div>
            </div>
          </Parallax>
        </Element>
      </BannerAnim>

      {/* <Arrow arrowType="prev" key="prev" prefixCls="user-arrow" >
             <div className="arrow">Prev</div>
            </Arrow>

            <Arrow arrowType="next" key="next" prefixCls="user-arrow"  >
              <div className="arrow">Next</div>
            </Arrow> */}

      {/* </Slider> */}
    </div>
  );
};

export default Slide;
