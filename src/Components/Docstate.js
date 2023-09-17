import React from 'react'
import doctt from '../Assets/images/doctt.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css"

function Docstate() {
  return (
    <div ClassName="container-fluid" style={{ display: "flex", background: "#57E964" }}>
        {/*-- ################# Doctors message Starts Here #######################--*/}

        <Container ClassName=" container-fluid flex bg-success" style={{ display: "flex", }}>
            <Row ClassName=" flex bg-success" style={{ display: "flex", }}>
                <Col ClassName=" flex bg-success">
                <div ClassName="col-md-6 col-sm-12 doc-img">
                  <img   src={doctt}  style={{
          width: "500px",
          
          border: "",
          marginTop: "-65px",
        }}alt=""/>

                </div>
                
                </Col>

                <Col>
                <div className="col-md-6 col-sm-12 doc-det" style={{marginleft:"-65"}} >
                  <h2> Hello, i'm Doctor Lauriel</h2>
                  <span>Expert Clinical Psychologist in Manhattan </span>
                  <p style={{ margin: "5px",fontWeight: "bold", fontFamily:"sans-serif" }}>St John's Memorial Clinic distinguishes itself by it's infrastructure, medical facilities, qualified and competent staff. </p>
                  <h4>Call me on : +237 677680738</h4>
                  
                </div>
                </Col>
            </Row>
        </Container>

         {/*-- ################# our team #######################--*/}
      
    </div>
  )
}

export default Docstate
