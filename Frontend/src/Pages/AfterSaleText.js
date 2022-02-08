import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Subheading from '../Components/Common/Subheading'
import Heading from '../Components/Common/Heading';
const AfterSaleText = (props) => {
  return <div className='aftersaletext'>
             <Row>
                 <Col lg={12} md={12} sm={12}>
                   <Subheading subheading="If you have any further questions or queries please do not hesitate to get in touch."/>
                    <Heading heading="After sales service"/>
                 </Col>
             </Row>
       </div>;
};

export default AfterSaleText;