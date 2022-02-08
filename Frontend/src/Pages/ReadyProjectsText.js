
import React from "react"
import {Row, Col} from 'react-bootstrap';
import Subheading from '../Components/Common/Subheading'
import Heading from '../Components/Common/Heading';
export const ReadyProjectsText = () => {
    return (
       <>
       <div className='avialableflatstext'>
             <Row>
                 <Col lg={12} md={12} sm={12}>
                    <Subheading subheading="Developing planned habitat for future generations."/>
                    <Heading heading="Ready Projects"/>
                 </Col>
             </Row>
       </div>
       </>
    )
}
export default ReadyProjectsText