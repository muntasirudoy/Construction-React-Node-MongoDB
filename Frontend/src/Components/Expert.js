import {Row,Col } from 'antd'
import React from 'react'
import person1 from "../Images/person1.jpg"
import person2 from "../Images/person2.jpg"
import person3 from "../Images/person3.jpg"
import person4 from "../Images/person4.jpg"
import './expert.css'
import {FacebookFilled,TwitterSquareFilled,WechatFilled,GooglePlusSquareFilled} from '@ant-design/icons';
import Subheading from '../Components/Common/Subheading'
import Heading from '../Components/Common/Heading'

const Expert = () => {
  return (
    <div className='expert'>
        <div className='container'>
            <Row>
                <Col span={24}>
                            <Subheading  subheading ="Our Team"/>
                            <Heading  heading="Expert Team Member"/>
                </Col>
            </Row>

           <Row className='all-carde' gutter={[32, 32]}>
               <Col span={6}> 
                  <div className='carde'> 
                     <div className='imagee'> <img src={person1} /></div>
                     <h3>MR.Kuddus Ali</h3>
                     <p>Assistant Director</p>
                     <div className='iconse'> <FacebookFilled /><TwitterSquareFilled /><WechatFilled /><GooglePlusSquareFilled /></div>
                  </div>
               </Col>
               <Col span={6}> 
                  <div className='carde'> 
                     <div className='imagee'> <img src={person2} /></div>
                     <h3>MR.Kuddus Ali</h3>
                     <p>Assistant Director</p>
                     <div className='iconse'> <FacebookFilled /><TwitterSquareFilled /><WechatFilled /><GooglePlusSquareFilled /></div>
                  </div>
               </Col>
               <Col span={6}> 
                  <div className='carde'> 
                     <div className='imagee'> <img src={person3} /></div>
                     <h3>MR.Kuddus Ali</h3>
                     <p>Assistant Director</p>
                     <div className='iconse'> <FacebookFilled /><TwitterSquareFilled /><WechatFilled /><GooglePlusSquareFilled /></div>
                  </div>
               </Col>
               <Col span={6}> 
                  <div className='carde'> 
                     <div className='imagee'> <img src={person4} /></div>
                     <h3>MR.Kuddus Ali</h3>
                     <p>Assistant Director</p>
                     <div className='iconse'> <FacebookFilled /><TwitterSquareFilled /><WechatFilled /><GooglePlusSquareFilled /></div>
                  </div>
               </Col>
               
           </Row>
        </div>
    </div>
  )
}

export default Expert