import React from 'react'
import {Container,Row, Col} from 'react-bootstrap';
import Heading from '../Components/Common/Heading';
import Subheading from '../Components/Common/Subheading'
import AboutPageText from './AboutPageText';
import { Fieldset } from 'primereact/fieldset';
import man from './man.jpg'
export const ManagementTeam = (props) => {
    return (
      <>
      
      <div className='aboutpage'>
         
      <Container>
             <Subheading subheading="OUR COMPANY"/>
             <Heading heading="Management Team" />
             

                 <Fieldset legend="Managin Director">
                   <AboutPageText designation="Engr. Md. Abdul Awal" img={man} details="The Founder and the Managing Director of The Structural Engineers Ltd., Engr. Md. Abdul Awal,
                      was born in 1954. He graduated from the Civil Engineering department of BUET in 1977. In the same year, he joined M/S 
                      Rana Construction Co. Ltd. as Asst. Engineer. He also worked with M/S Bangladesh Consultant Ltd. (BCL), the local consultant 
                      for the Jamuna Bridge Project, as a Project Engineer from January 1978 till September 1981.
                      He traveled abroad to augment his experience in his chosen profession. As a field Engineer in Baghdad (Iraq), he joined a Japanese firm named New 
                      Japan Engineering and Service Corp. Being impressed by Japanese Management techniques, he decided to emulate these techniques and propagate the 
                      standards in Bangladesh in order to improve the professionalism of Bangladeshi professionals."/>
                 </Fieldset>

                 <Fieldset legend="Managin Director">
                   <AboutPageText designation="Engr. Md. Abdul Awal" img={man} details="The Founder and the Managing Director of The Structural Engineers Ltd., Engr. Md. Abdul Awal,
                      was born in 1954. He graduated from the Civil Engineering department of BUET in 1977. In the same year, he joined M/S 
                      Rana Construction Co. Ltd. as Asst. Engineer. He also worked with M/S Bangladesh Consultant Ltd. (BCL), the local consultant 
                      for the Jamuna Bridge Project, as a Project Engineer from January 1978 till September 1981.
                      He traveled abroad to augment his experience in his chosen profession. As a field Engineer in Baghdad (Iraq), he joined a Japanese firm named New 
                      Japan Engineering and Service Corp. Being impressed by Japanese Management techniques, he decided to emulate these techniques and propagate the 
                      standards in Bangladesh in order to improve the professionalism of Bangladeshi professionals."/>
                 </Fieldset>

                 <Fieldset legend="Managin Director">
                   <AboutPageText designation="Engr. Md. Abdul Awal" img={man} details="The Founder and the Managing Director of The Structural Engineers Ltd., Engr. Md. Abdul Awal,
                      was born in 1954. He graduated from the Civil Engineering department of BUET in 1977. In the same year, he joined M/S 
                      Rana Construction Co. Ltd. as Asst. Engineer. He also worked with M/S Bangladesh Consultant Ltd. (BCL), the local consultant 
                      for the Jamuna Bridge Project, as a Project Engineer from January 1978 till September 1981.
                      He traveled abroad to augment his experience in his chosen profession. As a field Engineer in Baghdad (Iraq), he joined a Japanese firm named New 
                      Japan Engineering and Service Corp. Being impressed by Japanese Management techniques, he decided to emulate these techniques and propagate the 
                      standards in Bangladesh in order to improve the professionalism of Bangladeshi professionals."/>
                 </Fieldset>





      </Container>
      </div>
      
</>
    )
  }

  export default ManagementTeam
