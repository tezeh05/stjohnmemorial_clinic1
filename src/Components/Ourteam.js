import React from 'react'
import team1 from '../Assets/images/team/team1.jpg';
import team2 from '../Assets/images/team/team2.jpg';
import team3 from '../Assets/images/team/team3.jpg';
import team4 from '../Assets/images/team/team4.jpg';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-utilities.rtl.min.css.map"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/js/dist/dropdown.js"

import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.js"

function Ourteam() {
  return (
    <div>
        <section className="our-team">
        <div className="container">
            <div className="inner-title">
                <h2>Meet our Team</h2>
                <p>Take a look at our innovative and experiance team</p>
            </div>
            <div className="row team-member">
                <div className="col-md-3 col-sm-6">
                    <div className="user-card">
                        <div className="userar">
                            <img className="teammempic"  src={team1} alt="" />
                        </div>
                        <div className="detfs">
                            <p>Mark Frances<i> - MD</i></p>
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f fa-lg"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter fa-lg"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g fa-lg"></i></a></li>
                                <li><a href="#"><i class="fab fa-github fa-lg"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p fa-lg"></i></a></li>
                            </ul>
                            
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
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p fa-lg"></i></a></li>
                            </ul>
                        
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
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p fa-lg"></i></a></li>
                            </ul>
                            <p >3+ Years of Experiance in PHP with good innovative Ideas</p>

                        </div>
                    </div>

                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="user-card">
                        <div className="userar">
                            <img className="teammempic"  src={team4} alt="" />
                        </div>
                        <div className="detfs">
                            <p>Mark Frances<i> - MD</i></p>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p fa-lg"></i></a></li>
                            </ul>
                            <p >3+ Years of Experiance in PHP with good innovative Ideas</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      
    </div>
  )
}

export default Ourteam
