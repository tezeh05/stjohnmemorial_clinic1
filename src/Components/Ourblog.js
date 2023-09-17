import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-utilities.rtl.min.css.map"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/js/dist/dropdown.js"

import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.js"

import blog_01 from '../Assets/images/blog/blog_01.jpg';
import blog_02 from '../Assets/images/blog/blog_02.jpg';
import blog_03 from '../Assets/images/blog/blog_03.jpg';


function Ourblog() {
  return (
    <div>
        <section className="our-blog">
         	<div className="container">
         		<div className="row session-title">
        			<h2> Our Blog </h2>
        			<p>Take a look at what people say about US </p>
        		</div>
        		<div className="blog-row row">
        			<div className="col-md-4 col-sm-6">
        				<div className="single-blog">
        					<figure>
        						<img src={blog_01} alt=""/>
        					</figure>
        					<div className="blog-detail">
        						<small>By Admin | August 10 2018</small>
								<h4>Methods of Recuirtments</h4>
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
								<div className="link">
									<a href="">Read more </a><i class="fas fa-long-arrow-alt-right"></i>
								</div>
        					</div>
        					
        					
        				</div>
        			</div>
        			<div className="col-md-4 col-sm-6">
        				<div className="single-blog">
        					<figure>
        						<img src={blog_02} alt=""/>
        					</figure>
        					<div className="blog-detail">
        						<small>By Admin | August 10 2018</small>
								<h4>Methods of Recuirtments</h4>
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
								<div className="link">
									<a href="">Read more </a><i class="fas fa-long-arrow-alt-right"></i>
								</div>
        					</div>
        					
        					
        				</div>
        			</div>
        			<div className="col-md-4 col-sm-6">
        				<div className="single-blog">
        					<figure>
        						<img src={blog_03} alt=""/>
        					</figure>
        					<div className="blog-detail">
        						<small>By Admin | August 10 2018</small>
								<h4>Methods of Recuirtments</h4>
								<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
								<div className="link">
									<a href="">Read more </a><i class="fas fa-long-arrow-alt-right"></i>
								</div>
        					</div>
        					
        					
        				</div>
        			</div>
        		</div>
         	</div>
         </section>
      
    </div>
  )
}

export default Ourblog
