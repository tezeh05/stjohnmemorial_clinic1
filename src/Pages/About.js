import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import team1 from '../Assets/images/team/team1.jpg';
import team2 from '../Assets/images/team/team2.jpg';
import team3 from '../Assets/images/team/team3.jpg';
import team4 from '../Assets/images/team/team4.jpg';
import Docstate from '../Components/Docstate';



function About() {
  

  return (
    <div>
        <Header/>
        {/*<!-- Hero Start -->*/}
        <div className="container-fluid bg-success py-5 hero-header mb-5">
            <div class="row py-3">
                <div className="col-12 text-center">
                    <h1 className="display-3 text-white animated zoomIn">About Us</h1>
                    
                </div>
            </div>
        </div>
        {/*<!-- Hero End -->*/}

        <div className="container" style={{ backgroundcolor:"green"}}> 
        <Breadcrumb >
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="Sevices">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        </div>


        {/*<!-- tab Begining-->*/} 
        <div className="container">
          <div className="container">
              <Tabs defaultActiveKey="profile" id="fill-tab-example" className=" container mb-3 " fill>

                    <Tab eventKey="About Us" title="About Us" className="">

                    <Container>

                          {/* Columns are always 50% wide, on mobile and desktop */}
                          <Row>
                            <Col xs={6}>xs=6
                            <div className=" col-lg-6 col-md-12">
                                        <img src={team1} alt=""/>
                            </div> 
                            
                            </Col>
                            <Col xs={6}>xs=6
                            <div classname="col-lg-6 col-md-12 txtr">
                                        <h4>Why choos Health Care with
                                        <span>Medical Hospital</span>   
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
                                        <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui. </p>
                                    </div>
                            </Col>
                          </Row>
                          {/* Stack the columns on mobile by making one full-width and the other half-width */}
                          <Row>
                            <Col className="flex" xs={6} xs={6}>
                              xs=12 md=8
                              <div className="row flex">
                                 

                                    <div classname="col-lg-6 col-md-12 txtr">
                                        <h4>SERVICE ET PRODUITS :
                                        </h4>
                                        <span>Medical Hospital</span>   
                                        <p>  Procure des soins médicaux utilisant des produits de qualité et les personnels qualifiés dans un environnement sain</p>
                                    </div>
                                    
                                    <div classname="col-lg-6 col-md-12 txtr">
                                        <h4>SERVICE AND QUALITY PRODUCTS:
                                        </h4>
                                        <span>Medical Hospital</span>   
                                        <p>  Provides medical care using quality products and qualified personnels in a healthy environment</p>
                                    </div>
                              </div>
                            </Col>
                            <Col xs={6} md={4}>
                              xs=6 md=4
                            </Col>
                          </Row>
                     </Container>
                    






                    </Tab>
                    <Tab eventKey="Our Team" title="Our Team">
                            <section className="our-team">
                              <div className="container">
                                  <div className="inner-title ">
                                      <h2>Meet our Team</h2>
                                      <p>Take a look at our innovative and experiance Team</p>
                                  </div>
                                  <div className="row team-member">
                                      <div className="col-md-3 col-sm-6">
                                          <div className="user-card">
                                              <div className="userar">
                                                  <img className="teammempic"  src={team1} alt="" />
                                              </div>
                                              <div className="detfs">
                                                  <p>Mark Frances<i> - MD</i></p>
                                                  
                                                  <p >3+ Years of Experiance in PHP with good innovative Ideas</p>

                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-3 col-sm-6">
                                          <div className="user-card">
                                              <div className="userar">
                                                  <img className="teammempic" src={team2}  alt="" />
                                              </div>
                                              <div className="detfs">
                                                  <p>Mark Frances<i> - MD</i></p>
                                              
                                                  <p >3+ Years of Experiance in PHP with good innovative Ideas</p>

                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-3 col-sm-6">
                                          <div className="user-card">
                                              <div className="userar">
                                                  <img className="teammempic"  src={team3} alt="" />
                                              </div>
                                              <div class="detfs">
                                                  <p>Mark Frances<i> - MD</i></p>

                                                  <p >3+ Years of Experiance in PHP with good innovative Ideas</p>

                                              </div>
                                          </div>

                                      </div>
                                      
                                  </div>
                              </div>
                          </section>

                    </Tab>



                    <Tab ClassName=" bg-success" eventKey="Senior Management" title="Senior management">
                      Tab content for Loooonger Tab
                    </Tab>



                    
                </Tabs>
         

          </div>
        </div>
       {/*<!-- Tab ending-->*/} 



       <Docstate/>

        <Footer/>
      
    </div>
  )
}

export default About
