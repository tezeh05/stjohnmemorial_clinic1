import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap/js/dis/tab.js"
//import "bootstrap/js/dis/tab.js.map"
import "bootstrap/js/dist/tab.js"
//import { Tabs, Tab } from "react-bootstrap";
//import tab_style from '../Assets/css/tab_style.css';

function Pagetab() {
  return (
    <div className="Tab">
        <div className="container-fluid nav-pills mb-3 bg-dark " defaultActiveKey="profile" id="fill-tab-example">
            <div className="d-flex align-item-start">
            <ul className="nav flex nav-pills me-3" role="presentation">
                <button className="nav-link active" id="pills-hom-tab" data-bs-toggle="#pills-home">what we do</button>
                <button className="nav-link active" id="pills-hom-tab" data-bs-toggle="#pills-home" data-bs-target="">what we do</button>
                

           </ul>

        </div>
           
                    


        </div>
      
    </div>
  )
}

export default Pagetab
