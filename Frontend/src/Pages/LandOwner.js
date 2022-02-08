
import {Container,Row, Col} from 'react-bootstrap';
import React,{useState,useRef} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'
import LandOwnerText from './LandOwnerText';
import { Panel } from 'primereact/panel';

export const LandOwner = () => {
    const [loading1, setLoading1] = useState(false);
    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    }

    
    return (
        <div className='owner'>
             <Container>

             <LandOwnerText />

                  <Row>
                     <Col lg={12} md={12} sm={12}>

                            <div className='form'>
                                    <InputText placeholder='Land Address' />
                                    <InputText placeholder='Land Size'/>
                                    <InputText placeholder='Width of the front of land'/>
                                    <InputText placeholder='Land Category'/>
                                    <InputText placeholder='Facing of the land'/>
                                    <InputText placeholder='Actactive Features'/>
                                    <InputText placeholder='Land Owner Name'/>
                                    <InputText placeholder='Email ID'/>
                    
                                    <Button className='applybtn' label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
                            </div>
                   </Col>
            </Row>
         </Container>
        </div>
         
    );

}

export default LandOwner