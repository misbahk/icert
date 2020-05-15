import React, { Component } from 'react'
import { Card, Form, Row, Col} from 'react-bootstrap';

export class StudentRegister extends Component {
    render() {
        return (
            <div>
                 
                 <Card size="lg" className="mobcard p-3"  >

<Card.Body>  




<Form>
 

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
      Name of the Student 
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="name" onChange={this.handlechange} type="text" placeholder="Enter the  Name of the Student " />
    </Col>
  </Form.Group>



  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
   D-O-B
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="institute_Owner"  onChange={this.handlechange} type="text" placeholder="Enter DOB " />
    </Col>
  </Form.Group>



  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Email 
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter the Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Contact Number
    </Form.Label>
    <Col sm="8">
      <Form.Control type="number" placeholder="Enter the Contact Number" />
    </Col>
  </Form.Group>


  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
   Alternative Contact Number
    </Form.Label>
    <Col sm="8">
      <Form.Control type="number" placeholder="Enter the Alternative Contact Number" />
    </Col>
  </Form.Group>


  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="4">
      Institute ID
    </Form.Label>
    <Col sm="8">
    <Form.Control type="text" placeholder="Enter the Institute ID" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Course ID
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter Course ID" />
    </Col>
  </Form.Group>


  <button   style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",width:"4rem",
backgroundColor:"rgb(19, 130, 23)", fontSize:"0.8rem"
}}>Register</button>

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

export default StudentRegister
