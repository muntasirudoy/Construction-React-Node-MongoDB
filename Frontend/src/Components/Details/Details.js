import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import Detailsbox from './Detailsbox';
import './details.css'
import Slide from '../Common/Slide';
export const Details = () => {
  return <>
        <div className='details-card'>
             <Container>
             <Row className='slider'>
                 <Col xs={12} md={12} lg={12} > <Slide /> </Col>
             </Row>

                  <Row className='details-text'>
                     <Col xs={6} md={3} lg={3}data-aos="zoom-in-up"  data-aos-duration="1000">
                         <Detailsbox subtitle='Hotel and Serviced Apartments' title="SEL Realty Management Services Ltd." para=" With a vision to providing unique hotel & serviced apartment With a vision to providing unique hotel & serviced apartmentWith a vision to providing unique hotel & serviced apartment facility, SEL has blended urban contemporary design “SEL NIBASH” having the warmth of a sweet-resort-home. A team of Professional and" />
                     </Col>
                     <Col xs={6} md={3} lg={3} data-aos="zoom-in-up"  data-aos-duration="1000" >
                     <Detailsbox subtitle='Concrete Products' title="SEL Concrete Block." para=" With a vision to providing unique hotel & serviced apartment facility, SEL has blended urban contemporary design “SEL NIBASH” having the warmth of a sweet-resort-home. With a vision to providing unique hotel & serviced apartmentWith a vision to providing unique hotel & serviced apartmentA team of Professional and" />
                     </Col>
                     <Col xs={6} md={3} lg={3} data-aos="zoom-in-up"   data-aos-duration="1000">
                     <Detailsbox subtitle='Importer and Distributor' title="Synergy Elevators Ltd." para=" With a vision to providing unique hotel & serviced apartment facility, SEL has blended urban With a vision to providing unique hotel & serviced apartmentWith a vision to providing unique hotel & serviced apartmentcontemporary design “SEL NIBASH” having the warmth of a sweet-resort-home. A team of Professional and" />
                     </Col>
                     <Col xs={6} md={3} lg={3} data-aos="zoom-in-up"   data-aos-duration="1000" >
                     <Detailsbox subtitle='Readymix and Concrete Products' title="SEL Readymix and Concrete Products Ltd." para=" With a With a vision to providing unique hotel & serviced apartmentWith a vision to providing unique hotel & serviced apartment vision to providing unique hotel & serviced apartment facility, SEL has blended urban contemporary design “SEL NIBASH” having the warmth of a sweet-resort-home. A team of Professional and" />
                     </Col>
                   </Row>
             </Container>
        </div>
        </> ;
};
