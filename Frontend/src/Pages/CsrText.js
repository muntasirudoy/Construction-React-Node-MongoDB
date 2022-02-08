import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Heading from '../Components/Common/Heading';
import Subheading from '../Components/Common/Subheading'
const CsrText = (props) => {
  return <div className='csrtext'>
             <Row>
                 <Col lg={12} md={12} sm={12}>
                    <Subheading subheading="SOMETHING HERE"/>
                    <Heading heading="SEL CHARITABLE FOUNDATION"/>
                    <p className='companydetails'>{props.csrdetails}</p>
                 </Col>
             </Row>
       </div>;
};

export default CsrText;
