import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Subheading from '../Components/Common/Subheading'
import Heading from '../Components/Common/Heading';
const ContactUsText = (props) => {
  return <div className='aftersaletext'>
             <Row>
                 <Col lg={12} md={12} sm={12}>
                   <Subheading subheading="If you have any further questions or queries please do not hesitate to get in touch."/>
                    <Heading heading="Get in Touch"/>
                 </Col>
             </Row>
       </div>;
};

export default ContactUsText;