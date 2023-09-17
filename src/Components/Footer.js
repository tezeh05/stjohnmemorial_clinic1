import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-utilities.rtl.min.css.map"
import "bootstrap/dist/css/bootstrap.css"


import "bootstrap/js/dist/dropdown.js"


function Footer() {
  return (
    <footer>
    
        <div className='container-fluid text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style="margin-top: -75px;'style={{ display: "flex", background: "#95B9C7" }}>
            <div className="container-fluid pt-5">
                <div className="row g-5 pt-5">
                <div className="py- col-lg-3 col-md-6">
                        <h2 className="text-white mb-4"> ST John Memorial Clinic</h2>
                        <p>
                        St John's Memorial Clinic distinguishes itself by it's infrastructure, medical 
                        facilities, qualified and competent staff.

                        </p>
                        <p>
                        St John's Memorial Clinic situé à Newton Aéroport se distingue par des infrastructures, 
                        les personnels compétent et qualifiés

                        </p>
                        

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4"> Quick Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                            <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4"> Popular link </h3>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                            <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                            <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4"> Get In Touch</h3>
                        <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>Non Glacé besides "Foyer Banwa, New town Airport , Douala II, cameroon</p>
                        <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                        <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+237 677680738</p>
                        <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>P.O: Box 3662 Douala Cameroon.</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4"> Follow Us</h3>
                        <div className="d-flex ">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i clasName="fab fa-facebook-f fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                        </div>

                    </div>

                </div>

            </div>


        </div>
        {/* <!--Copyright section-->*/}
      <div className="bg-green-500 p-4 text-center dark:bg-green-700">
        <span>© 2023 Copyright:</span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="https://tailwind-elements.com/">
            REDAITECH
          </a>
      </div>




    </footer>
  )
}

export default Footer
