import React,{useState} from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import AfterSaleText from './AfterSaleText';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
const AfterSale = () => {
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
                          <AfterSaleText />
                         <Row>
                             <Col lg={5} md={5} sm={12}>
                                  <Card icon='pi pi-fw pi-home'  title="Contact us" subTitle="mahmudbuilders@com" />
                                  <Card icon='pi pi-fw pi-home'  title="Authorized Person Number" subTitle="(88) 01819-558130" />
                             </Col>
                             <Col lg={7} md={7} sm={12}>

                             <div className='afterinput'>
                                    <InputText placeholder='Project Name' />
                                    <InputText placeholder='Clients Name'/>
                                    <InputText placeholder='Apartment Name'/>
                                    <InputText placeholder='Email'/>
                                    <InputNumber value={value2} inputId="withoutgrouping" useGrouping={false} placeholder='Phone'/>
                                    <Dropdown  options={Type} placeholder="Type of problem"/>
                                    <InputTextarea placeholder='Write your message'/>

                                    <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
 
                            </div>

                             </Col>
                         </Row>
                            
                    </Container>
            </div>

</>;
};

export default AfterSale;