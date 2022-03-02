
import React from 'react';
import Heading from '../Common/Heading';
import { Row, Col } from 'antd';
import {SwapRightOutlined} from '@ant-design/icons';
import icon from '../../Images/i4.png'
import aicon from '../../Images/a1.jpg'
import Subheading from '../Common/Subheading';
import './about.css'
import { Link } from 'react-router-dom';

export const About = (props) => {

  return <div className='container'>
                    <div className='about'> 
                            <Subheading  subheading ="who we are"/>
                            <Heading  heading="About Us"/>
                          <div className='details' data-aos="flip-down">
                            <Row gutter={[24, 16]}>
                                <Col span={12}>
                                   <div className='detail-heading'>
                                     <h6>HIGH PERFORMANCE</h6>
                                     <h2>We Create Buildings That <br/><span>Meet Your Needs.</span> </h2>
                                     <p>Buildtab is the creative enterprise, where innovation is a way of life.
                                        We are uniquely resourced with end-to-end services to take clients from
                                        inspiration through core conceptualization.</p>
                                   </div>
                                   <div className='detail-list'>
                                       <ul>
                                         <li> <SwapRightOutlined />Supply Chain and Operations </li>
                                         <li><SwapRightOutlined />Rich Quality Without Question </li>
                                         <li><SwapRightOutlined />Building Experience Exposure </li>
                                         <li><SwapRightOutlined />A Great Project Management </li>
                                       </ul>
                                      <div className='list-right'>
                                           <p className='list-para'>1200  <br/> <span>Satisfied Patients</span> </p>
                                           <img style={{width:"30%",height:"100%",padding:"10px",background:"rgb(255, 178, 0)"}} src={icon} />
                                      </div>
                                   </div>
                                   <div className='detail-bottom'>
                                        <p>“Constructor explains how you can enjoy high end flooring like textured laminate”</p>
                                        <p className='link-btn'> <Link to='/contactus' > Contact Now</Link></p>
                                    </div>
                                </Col>

                                <Col span={12}>
                                  <div className='image'>
                                  <img style={{width:"100%"}}  src={aicon}/>
                                  </div>

                                </Col>
                            </Row>
                        </div>
                    </div>
         </div>;
};
export default About