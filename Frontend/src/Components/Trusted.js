import { Col, Row } from 'antd'
import React from 'react'
import './trusted.css'
import imgb1 from '../Images/w1.png'
import imgb2 from '../Images/w2.png'
import imgb3 from '../Images/w3.png'
import imgb4 from '../Images/w4.png'
import imgb5 from '../Images/w5.png'
import imgb6 from '../Images/w6.png'
import imgb7 from '../Images/w7.png'
import imgb8 from '../Images/w8.png'
import Subheading from '../Components/Common/Subheading'
import Heading from '../Components/Common/Heading'

const Trusted = () => {
  return (
    <div className='trusted'>
        <div className='container'> 
        <Row>
            <Col span={24}>
                 <Subheading  subheading ="Our Cliets"/>
                 <Heading  heading="Our Trusted Big Clients!"/>
            </Col>
        </Row>
       <Row className='all-cardt' gutter={[0, 0]}>
            <Col span={6}>
                <div className='cardt'> 
                   <img src={imgb1} />
                </div>
            </Col>
            <Col span={6}>
                <div className='cardt'> 
                   <img src={imgb2} />
                </div>
            </Col>
            <Col span={6}>
                <div className='cardt'> 
                   <img src={imgb3} />
                </div>
            </Col>
            <Col span={6}>
                <div className='cardt'> 
                   <img src={imgb4} />
                </div>
            </Col>
            <Col span={6}>
                <div className='cardt'> 
                   <img src={imgb5} />
                </div>
            </Col>
            <Col span={6}>
                <div className='cardt'> 
                   <img src={imgb6} />
                </div>
            </Col>
            <Col span={6}>
                <div className='cardt'> 
                   <img src={imgb7} />
                </div>
            </Col>
            <Col span={6}>
                <div className='cardt'> 
                   <img src={imgb8} />
                </div>
            </Col>
        </Row>
    </div>
    </div>
  )
}

export default Trusted