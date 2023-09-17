import React from 'react'
import "bootstrap/js/dist/carousel.js"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/js/dist/carousel"

import slider_1 from '../Assets/images/slider/slider_1.jpg';
import slider_2 from '../Assets/images/slider/slider_2.jpg';
import slider_3 from '../Assets/images/slider/slider_3.jpg';


function Carousel() {
  return (
     <div>

       <div className="slider-details">
            <div id="carouselExampleIndicator" className="carousel slide" data-bs-ride="carousel"> 
                <o1 className="carousel-indicators">

                </o1>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={slider_1} alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="animated bounceIndown">  best quality  </h5>
                        <p className="animated bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, 
                            aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis
                            
                            sed sagittis at, sagittis quis neque. Praesent
                            
                            </p>
                    </div>
                    <div className="row vbh">
                    <button className=" btn btn-success animated bounceInUp"> Book an Appointment</button>
                    </div>
                    </div>

                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={slider_3} alt="Third slide"/>
                <div className="carousel-caption vdg-cur d-none d-md-block">
                    <h5 className="animated bounceInDown ">Best Free Hospital Template</h5>
                        <p className="animated bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque,  
                            aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis
                            sed sagittis at, sagittis quis neque. Praesent.
                        </p>
                        <div className="row vbh">
                            <button className=" btn btn-success animated bounceInUp"> Book an Appointment</button>
                        </div>

                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={slider_2} alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>


        </div>
        

    </div>
  )
}

export default Carousel
