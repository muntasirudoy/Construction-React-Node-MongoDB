import React,{useState} from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import ContactUsText from './ContactUsText';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
const ContactUs = () => {
    const Type = [
        {label: 'Civil', value: 'NY'},
        {label: 'Electrical', value: 'RM'},
        {label: 'Others', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
    const [value2, setValue2] = useState(+880);
    const [loading1, setLoading1] = useState(false);
    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    }
  return <> 

          <div className='aftersale'>
                    <Container>
                          <ContactUsText />
                         <Row>
                             <Col lg={5} md={5} sm={12}>
                                 
                             </Col>
                             <Col lg={7} md={7} sm={12}>

                             <div className='afterinput'>
                                    <InputText placeholder=' Name' />
                                    <InputText placeholder='Email'/>
                                    <InputText placeholder='Subject'/>
                                    <InputNumber value={value2} inputId="withoutgrouping" useGrouping={false} placeholder='Phone'/>
                                   
                                    <InputTextarea placeholder='Write your message'/>

                                    <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
 
                            </div>

                             </Col>
                         </Row>
                            
                    </Container>
            </div>

</>;
};

export default ContactUs;