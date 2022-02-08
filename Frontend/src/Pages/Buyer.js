
import {Container,Row, Col} from 'react-bootstrap';
import React,{useState,useRef} from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'
import BuyerText from './BuyerText';
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
             <BuyerText />
                  <Row>
                     <Col lg={12} md={12} sm={12}>

                            <div className='form buyer-form'>
                                    <InputText placeholder='Preferred Location' />
                                    <InputText placeholder='Preferred Size'/>
                                    <InputText placeholder='Car Parking Requerment'/>
                                    <InputText placeholder='Expected Handover Date'/>
                                    <InputText placeholder='Facing of the Apt.'/>
                                    <InputText placeholder='Actactive Features'/>
                                    <InputText placeholder='Preferred Floor'/>
                                    <InputText placeholder='Min. Number of Bedroom'/>
                                    <InputText placeholder='Min. Number of Bathroom'/>
                                    <InputText placeholder='Buyers Name'/>
                                    <InputText placeholder='Buyers Email'/>
                                    <InputText placeholder='Buyers Profession'/>
                    
                                    <Button className='applybtn' label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
                            </div>
                   </Col>
            </Row>
         </Container>
        </div>
         
    );

}

export default LandOwner