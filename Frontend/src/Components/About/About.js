
import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import Heading from '../Common/Heading';
import Subheading from '../Common/Subheading';
import './about.css'

export const About = (props) => {

  return <Container>
                    <div className='about'> 
                            <Subheading  subheading ="who we are"/>
                            <Heading  heading="About Us"/>
                          <div className='details' data-aos="flip-down">
                            <Row>
                                <Col xs={12} md={12} lg={12} >
                                    <p className='about-text'>SEL has been in the construction arena for the last 37 years, initially serving various sectors of the 
                                        Government including the sectors of health, food, power, disaster management etc. and gradually moving
                                        on to the sector of real estate. With a view to alleviating the living accommodation problem of the mega
                                        city Dhaka, SEL stepped in the real estate development scene in 1994. During the span of the last 
                                        26 years SEL has completed and handed over 209 apartment and commercial projects in Dhaka,
                                        Cumilla and ahead steps also in Khulna, Chittagong, Bogra and Savar to establishing itself
                                        as an embodiment of quality, competence and efficiency. </p>
                                </Col>
                            </Row>
                        </div>
                    </div>
         </Container>;
};
export default About