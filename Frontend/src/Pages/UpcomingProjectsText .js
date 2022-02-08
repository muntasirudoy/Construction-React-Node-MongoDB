
import React from "react"
import {Row, Col} from 'react-bootstrap';
import Subheading from '../Components/Common/Subheading'
import Heading from '../Components/Common/Heading';
export const UpcomingProjectsText = () => {
    return (
       <>
       <div className='avialableflatstext'>
             <Row>
                 <Col lg={12} md={12} sm={12}>
                    <Subheading subheading="Discover The Future."/>
                    <Heading heading="Upcoming Projects"/>
                    
                 </Col>
             </Row>
       </div>
       </>
    )
}
export default UpcomingProjectsText