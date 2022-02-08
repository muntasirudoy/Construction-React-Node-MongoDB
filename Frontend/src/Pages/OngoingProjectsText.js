
import React from "react"
import {Row, Col} from 'react-bootstrap';
import Subheading from '../Components/Common/Subheading'
import Heading from '../Components/Common/Heading';
export const OngoingProjectsText = () => {
    return (
       <>
       <div className='avialableflatstext'>
             <Row>
                 <Col lg={12} md={12} sm={12}>
                    <Subheading subheading="Creating environment friendly dwellings for ultimate satisfaction of customers"/>
                    <Heading heading="Ongoing Projects "/>
                    
                 </Col>
             </Row>
       </div>
       </>
    )
}
export default OngoingProjectsText