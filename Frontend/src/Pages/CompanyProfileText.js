import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Subheading from '../Components/Common/Subheading'
import Heading from '../Components/Common/Heading';
const CompanyProfileText = (props) => {
  return <div className='companyprofiletext'>
             <Row>
                 <Col lg={12} md={12} sm={12}>
                    <Subheading subheading="WHO WE ARE"/>
                    <Heading heading="About Mahmud Builders"/>
                    <p className='companydetails'>{props.companydetails}</p>
                 </Col>
             </Row>
       </div>;
};

export default CompanyProfileText;
