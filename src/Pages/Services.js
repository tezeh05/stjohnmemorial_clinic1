import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Pagetab from '../Components/Pagetab'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import gallery_12 from '../Assets/images/gallery/gallery_12.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';



function Services() {
  return (
    <div>
        <Header/>
        {/*<!-- Hero Start -->*/}
        <div className="container-fluid bg-primary py-5 hero-header mb-5">
            <div class="row py-3">
                <div className="col-12 text-center">
                    <h1 className="display-3 text-white animated zoomIn">Clinical services</h1>
                    <p className="h4 text-white"> our servics are good quality</p>
                  
                </div>
            </div>
        </div>
        {/*<!-- Hero End -->*/} 
        
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="Sevices">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>


         {/*<!--  list of services -->*/} 

         <Container>
          <hi> list of our services</hi>
            <Row>
              <Col sm={8}>
              <ListGroup as="ol" numbered>

                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Vacination</div>
                      Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>

                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Echography</div>
                      Ecographie
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>

                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Electrocardiography</div>
                      ECG
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>


                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Electrocardiography</div>
                      ECG
                    </div>
                    <Badge bg="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>




                </ListGroup>
                


              </Col>
              <Col sm={4}>sm=4</Col>
            </Row>
            
          </Container>





          <Container>

           
            <Row>
              <Col sm>sm=true
              <Card ClassName="px-5" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={gallery_12} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
             </Card>
              
              
              </Col>
              <Col sm>
              <Card ClassName="px-5" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={gallery_12} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
          </Card>
              
              </Col>
              <Col sm>
              <Card ClassName="px-5" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={gallery_12} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


              </Col>
            </Row>
          </Container>

        
        


        

        <Footer/>
      
    </div>
  )
}

export default Services



