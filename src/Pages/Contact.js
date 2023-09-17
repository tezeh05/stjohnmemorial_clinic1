import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div>
        <Header/>

        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="Contact">Contact Us</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
        </Breadcrumb>

        {/*<!-- tab Begining-->*/} 
        <div>
          <div>
              <Tabs defaultActiveKey="profile" id="fill-tab-example" className=" container mb-3" fill>
                    <Tab eventKey="home" title="Home">
                      Tab content for Home






                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                      Tab content for Profile
                      <section className="our-team">
                        <div className="container bd-dark">
                            <div className="inner-title">
                                <h2>Meet our Team</h2>
                                <p>Take a look at our innovative and experiance team</p>
                            </div>
                          
                        
                        </div>
                      </section>

                    </Tab>



                    <Tab eventKey="longer-tab" title="Loooonger Tab">
                      Tab content for Loooonger Tab
                    </Tab>



                    <Tab eventKey="contact" title="Contact">
                      Tab content for Contact
                    </Tab>
                </Tabs>
         

          </div>
        </div>
       {/*<!-- Tab ending-->*/} 


        <Footer/>
      
    </div>
  )
}

export default Contact
