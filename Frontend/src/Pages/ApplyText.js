import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Subheading from '../Components/Common/Subheading'
import Heading from '../Components/Common/Heading';
const ApplyText = (props) => {
  return <div className='aftersaletext'>
             <Row>
                 <Col lg={12} md={12} sm={12}>
                   <Subheading subheading="Send us your details."/>
                    <Heading heading="SHARE YOUR DETAILS"/>
                 </Col>
             </Row>
       </div>;
};

export default ApplyText;