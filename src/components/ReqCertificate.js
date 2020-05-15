import React, { Component } from 'react'
import { Card, Form, Row, Col} from 'react-bootstrap';




class ReqCertificate extends Component {



render() {
return(
	<div>

<Card size="lg" className="mobcard p-3"  >

<Card.Body>  




<Form>
 

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Student ID
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="name" onChange={this.handlechange} type="text" placeholder="Enter the Student ID " />
    </Col>
  </Form.Group>




  
  <button   style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",width:"4rem",
backgroundColor:"blue", fontSize:"0.8rem"
}}>Request</button>

<button 
style={{border:"0px", borderRadius:"1.5rem",color:"#fff", width:"4rem",height:"2rem",
backgroundColor:"rgb(202, 69, 69)", fontSize:"0.8rem", marginLeft:"3px"
}}
>Cancel</button>


</Form>



</Card.Body>
</Card>



	</div>

)
}
}

export default ReqCertificate