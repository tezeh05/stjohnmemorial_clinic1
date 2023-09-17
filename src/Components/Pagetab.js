import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap/js/dis/tab.js"
//import "bootstrap/js/dis/tab.js.map"
import "bootstrap/js/dist/tab.js"
import "bootstrap/js/dist/button"
//import { Tabs, Tab } from "react-bootstrap";

function Pagetab() {
  return (
    <div className="container content py-4 clearfix">
      
      <nav className="navbar navbar-light navbar-expand bg-light mb-4 p-2 rounded">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a href="#" className="nav-link active" data-filter="*">All Categories</a>
          </li>
          <li className="nav-item">
					<a href="#" className="nav-link" data-filter=".admin">Admin & Dashboard</a>
				</li>
        <li className="nav-item">
					<a href="#" className="nav-link" data-filter=".business">Business & Corporate</a>
				</li>

        </ul>

      </nav>
      <div className="grid">
        <a href="" className="admin item" target="_blank" data-category="Admin &amp; Dashboard">
          <div ClassName="container">
            <div className="row">
              <div className=" col">
                <p> jdjjdjd dhfhhd dhyudyd dhydyd dydyd dydyd dyydyd dyydyd dydtdytd dihfiudyfd ofoefewlkjhf987</p>

              </div>

            </div>

          </div>


        </a>
        <a href="" className="admin item" target="_blank" data-category="business &amp; Dashboard">
          <div ClassName="container">
            <div className="row">
              <div className=" col">
                <p> jdjjdjd dhfhhd dhyudyd dhydyd dydyd dydyd dyydyd dyydyd dydtdytd dihfiudyfd ofoefewlkjhf987</p>

              </div>

            </div>

          </div>


        </a>
        <div href="" className="admin item" target="_blank" data-category="business &amp; Dashboard">
        <div ClassName="container">
            <div className="row">
              <div className=" col">
                <p> jdjjdjd dhfhhd dhyudyd dhydyd dydyd dydyd dyydyd dyydyd dydtdytd dihfiudyfd ofoefewlkjhf987</p>

              </div>

            </div>

          </div>


        </div>
      </div>








        
    </div>
  )
}

export default Pagetab




