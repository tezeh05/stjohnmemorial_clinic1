import React from 'react'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import Docstate from '../Components/Docstate';
import Carousel0 from '../Components/Carousel0';


function Home() {
  return (
    <div>
        <Header/>
        <Carousel0/>
        <Carousel/>
        {/*-- ################# key features Starts Here #######################--*/}
        <section className="key-features">
                      <div class="container">
                          <div className="inner-title">

                              <h2>Our Key Features</h2>
                              <p>Take a look at some of our key features</p>
                          </div>

                          <div className="row">
                              <div className="col-md-4 col-sm-6">
                                  <div className="single-key">
                                      <i className="fas fa-hospital-alt"></i>
                                      <h5>Newest Technologies</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                                  </div>
                              </div>

                              <div className="col-md-4 col-sm-6">
                                  <div className="single-key">
                                      <i className="fas fa-user-md"></i>
                                      <h5>Diagnostics</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                                  </div>
                              </div>

                              <div className="col-md-4 col-sm-6">
                                  <div className="single-key">
                                      <i className="fas fa-briefcase-medical"></i>
                                      <h5>High Customer Satisfaction</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                                  </div>
                              </div>

                              <div className="col-md-4 col-sm-6">
                                  <div className="single-key">
                                      <i className="fas fa-capsules"></i>
                                      <h5>Pharma Pipeline</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                                  </div>
                              </div>

                              <div className="col-md-4 col-sm-6">
                                  <div className="single-key">
                                      <i className="fas fa-prescription-bottle-alt"></i>
                                      <h5>Pharma Team</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                                  </div>
                              </div>



                              <div className="col-md-4 col-sm-6">
                                  <div className="single-key">
                                      <i className="far fa-thumbs-up"></i>
                                      <h5>High Quality treatments</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                                  </div>
                              </div>
                          </div>






                      </div>

                  </section>





        <Docstate/>

        <Footer/>
      
    </div>
  )
}

export default Home
