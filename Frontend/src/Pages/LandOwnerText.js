import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Heading from '../Components/Common/Heading';
import Subheading from '../Components/Common/Subheading'
const LandOwnerText = (props) => {
  return <div className='ownertext'>
             <Row>
                 <Col lg={12} md={12} sm={12}>
                    <Subheading subheading="SEND US"/>
                    <Heading heading="LAND & LAND OWNER INFORMATION"/>
                 </Col>
             </Row>
       </div>;
};

export default LandOwnerText;
