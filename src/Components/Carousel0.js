import React from 'react'
import "bootstrap/js/dist/carousel.js"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/js/dist/carousel"
//import "../node_modules/"
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import slider_1 from '../Assets/images/slider/slider_1.jpg';
import slider_2 from '../Assets/images/slider/slider_2.jpg';
import slider_3 from '../Assets/images/slider/slider_3.jpg';

function Carousel0() {
  return (
    <div id="welcomecarousel" className="carousel slide crouse-fade" data-bs-ride="carousel" interval={1000}>
        <div className="carousel-inner">

            <div className=" carousel-item active">
            <img className="d-block w-100" src={slider_1} alt="First slide"/>
            <Container className="carousel-caption d-none d-md-block">
                <Row xs={1} md={2}>
                    <Col>
                    <h1> carousel</h1>
                    
                    </Col>
                </Row>
                
             </Container>
            <container>

            </container>

            </div>

            <div className=" carousel-item active">
            <img className="d-block w-100" src={slider_2} alt="second slide"/>

            </div>

            <div className=" carousel-item active">
            <img className="d-block w-100" src={slider_3} alt="third slide"/>

            </div>

        </div>
      
    </div>	
    
    
  )
}

export default Carousel0
