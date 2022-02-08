import React,{useState} from "react"
import {Container,Row, Col} from 'react-bootstrap';
import { PanelMenu } from 'primereact/panelmenu';
import AvailableData from './AvailableData'
import { Chip } from 'primereact/chip';
import Card from '../Components/Category/card'
import b1 from './b1.jpg'
import ReadyProjectsText from "./ReadyProjectsText";


export const ReadyProjects= () => {

    return (
     
        <div className='avialableflats'>
        <Container>
             <ReadyProjectsText/>
             <Row>
                 <Col lg={3} md={3} sm={12}>
                 <Chip label="Filter by location" icon="pi pi-map" width="100%" className="mr-2 mb-2 py-2 px-4" />
                 <PanelMenu model={AvailableData} style={{width:'300px'}}/>
                
                 </Col>
                 <Col lg={9} md={9} sm={12}>
                     <Row >
                        <Col lg={4} md={4} sm={12}>
                          <div className="avialablecard">
                             <Card img={b1} title="Dhaka Housing" />
                         </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <div className="avialablecard">
                             <Card img={b1} title="Dhaka Housing" />
                         </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <div className="avialablecard">
                             <Card img={b1} title="Dhaka Housing" />
                         </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <div className="avialablecard">
                             <Card img={b1} title="Dhaka Housing" />
                         </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <div className="avialablecard">
                             <Card img={b1} title="Dhaka Housing" />
                         </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <div className="avialablecard">
                             <Card img={b1} title="Dhaka Housing" />
                         </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <div className="avialablecard">
                             <Card img={b1} title="Dhaka Housing" />
                         </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <div className="avialablecard">
                             <Card img={b1} title="Dhaka Housing" />
                         </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <div className="avialablecard">
                             <Card img={b1} title="Dhaka Housing" />
                         </div>
                        </Col>
                     </Row>
                 </Col>
             </Row>
        </Container>
</div>
    )
}
export default ReadyProjects