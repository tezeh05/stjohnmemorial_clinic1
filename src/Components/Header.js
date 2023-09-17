import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-utilities.rtl.min.css.map"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/js/dist/dropdown.js"

import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.js"

import logo from '../Assets/images/logo.jpg';

function Header() {
  return (
    <header>
        {/*<!-- Topbar Start -->*/}
        <div className="container-fluid ps-5 pe-0 d-none d-lg-block " style={{ display: "flex", background: "#C0C0C0" }} >
                    <div className="row gx-0">
                        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <small className="py-2"><i class="far fa-clock text-primary me-2"style={{ fontWeight:"bold" }}></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-end" >
                            <div className="position-relative d-inline-flex align-items-center text-white top-shape px-5" style={{ background: "#008000" }}>
                                <div className="me-3 pe-3 border-end py-2">
                                    <p className="m-0"><i class="fa fa-envelope-open me-2"></i>info@example.com</p>
                                </div>
                                <div className="py-2">
                                    <p className="m-0"><i class="fa fa-phone-alt me-2"></i>+237 677 680 738</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*<!-- Topbar End -->*/}


            {/*<!-- Navbar Start --> */} 
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <img className="img-fluid img-thumbnail  "src={logo}  alt="" /> 
                <a href="/" className="flex  navbar-brand p-0">
                    <h1 className="m-0 " style={{ margin: "5px",fontWeight: "bold", fontSize:"10", fontFamily:"sans-serif", color:"green"}}>ST JOHN MEMORIAL CLINIC</h1>
                  
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="/" class="nav-item nav-link active" style={{ margin: "5px",fontWeight: "bold", fontSize:"10", fontFamily:"sans-serif", color:"green"}}onClick={{}} >HOME</a>
                        <a href="About" class="nav-item nav-link active">ABOUT US</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">OUR SERVICES</a>
                            <div className="dropdown-menu m-0">
                                <a href="Services" className="dropdown-item" >Clinic Services</a>
                                <a href="price.html" className="dropdown-item">Surgical Service</a>
                                <a href="team.html" className="dropdown-item">medical Services</a>
                                <a href="" className="dropdown-item">diagnostics services</a>
                                <a href="appointment.html" className="dropdown-item">Pharmaceutical Services</a>
                                <a href="appointment.html" className="dropdown-item">Nursing services</a>
                                <a href="appointment.html" className="dropdown-item">Specialized Clinical Services</a>
                                <a href="appointment.html" className="dropdown-item">Canteen</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">MEDIA CENTER</a>
                            <div className="dropdown-menu m-0">
                                <a href="Newsline" className="dropdown-item">News line</a>
                                <a href="Blog" className="dropdown-item">Our Blog</a>
                                <a href="Gallery" className="dropdown-item">Gallery</a>
                            </div>
                        </div>
                        <a href="Contact" class="nav-item nav-link active">CONTACT US</a>
                    </div>
                    <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal" style={{ }}><i class="fa fa-search"></i></button>
                    <a href="Appointment" className="btn btn-primary py-2 px-4 ms-3"style={{ background: "#008000" }} >Appointment</a>
                </div>
            </nav>
            {/*<!-- Navbar End -->*/}

    </header>
    
  )
}

export default Header
