import React from 'react';
import './category.css';
import {Container,Row,Col} from 'react-bootstrap';
import Card from './card';
import c1 from './c1.jpg'
import { Link } from 'react-router-dom';
export const Category = (props) => {
  return <div className='category'>
              <Container>
                 <div className='category-plate'>
                    <Row>
                      <Col xs={6} md={4} lg={3} data-aos="flip-left" data-aos-duration="1000"> <Link to='./ReadyProjects'> <Card img={c1} title="Ready Projects"/>  </Link> </Col>
                      <Col xs={6} md={4} lg={3} data-aos="flip-right" data-aos-duration="1000" > <Link to='./AvialableFlats'> <Card img={c1} title="Complete Projects"/>  </Link> </Col>
                      <Col xs={6} md={4} lg={3} data-aos="flip-left" data-aos-duration="1000"> <Link to='./UpcomingProjects'> <Card img={c1} title="Upcoming Projects"/>  </Link>  </Col>
                      <Col xs={6} md={4} lg={3} data-aos="flip-right" data-aos-duration="1000"> <Link to='./OngoingProjects'> <Card img={c1} title="Ongoing Projects"/>  </Link>  </Col>
                    </Row>
                </div>
             </Container>
      </div>;
};

export default Category
