import React from 'react'
import {Link } from "react-router-dom";
import logo from '../../Images/logo/full-logo.svg'
import {Container,Row,Col} from 'react-bootstrap';
import { Footertext } from './Footertext';
import './footer.css'

export const Footer = () => {
    return (
      
        <div class='footer'>
             <Container>
                      
                             <Row>
                                <Col  className='footer-col' xs={12} md={4} lg={4} > 
                                   <h4 className='footer-title'> MAHMUD BUILDERS LTD</h4>
                                   <ul>
                                     <Footertext li="Address: SEL Centre, 29, West Panthapath,Bir Uttam Kazi Nuruzzaman Road, Dhaka 1205" />
                                     <Footertext li="Phone: (8802) 58151094, 58155290, (88) 01819558141" />
                                     <Footertext li="Fax: (8802) 48113973" />
                                     <Footertext li="Email (For Information): info@sel.com.bd" />
                                   </ul>
                                </Col>
                                <Col className='footer-col' xs={12} md={4} lg={4} >
                                <h4 className='footer-title'> USEFUL LINKS</h4>
                                   <ul>
                                     <Footertext li="Webmail login" />
                                     <Footertext li="Leave Managemetn System(LMS)" />
                                     <Footertext li="Contact Us" />
                                     <Footertext li="Our Profile" />
                                   </ul>
                                </Col>
                                <Col className='footer-col' xs={12} md={4} lg={4} >
                                <h4 className='footer-title'>NEWS LETTER</h4>
                                   <ul>
                                     <Footertext li="Facebook" />
                                     <Footertext li="Gallery" />
                                   </ul>
                                </Col>
                            </Row>
                      <Row style={{textAlign:"center", color:"rgb(192, 192, 192)",fontSize:"12px"}}>
                        <Col xs={12} md={12} lg={12}  > <p>Copyrights © 2018. All Rights Reserved by SEL || Developed By: SEL IT</p> </Col>
                      </Row>
          </Container>
        </div>
      
    )
}

export default Footer