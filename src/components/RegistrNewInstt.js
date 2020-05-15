import React, { Component } from 'react'
import { Card, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios'



 class RegistrNewInstt extends Component {

state={
  name:'',
  institute_Owner:'',
}

handlechange=(e) =>{
  this.setState({
    [e.target.name]: e.target.value
  })
}


handleSubmit =() =>{

axios.post('http://206.189.129.133:8000/requestAffiliation',{name:this.state.name,institute_Owner:this.state.institute_Owner})
.then(
  Response=>{
    console.log("responsebend", Response)
  }
)

}




    render() {
    
        return (
            <div>
            
              <Card size="lg" className="mobcard p-3"  >

<Card.Body>  
<span> <h3 style={{float:"left", 
color:"#5b1667",fontFamily:"sans-serif", fontWeight:"540"
}}>Register a New Institute</h3>


<button  onClick={this.handleSubmit}
style={{backgroundColor:"rgb(61, 73, 192)", border:"0px", float:"right",
height:"2.5rem", color:"#FFF",borderRadius:"1.5rem"}}
>Register</button>
</span>

<br/>
<nr/>

<br/>


<Form>
 

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
      Name of the Institute 
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="name" onChange={this.handlechange} type="text" placeholder="Enter the  Name of the Institute " />
    </Col>
  </Form.Group>



  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Institute Owner
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="institute_Owner"  onChange={this.handlechange} type="text" placeholder="Enter  Institute Owner " />
    </Col>
  </Form.Group>



  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Address 
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter Address of the Institute" />
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
    Website
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter the Website" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="4">
      Email
    </Form.Label>
    <Col sm="8">
    <Form.Control type="text" placeholder="Enter the Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
    Short Description
    </Form.Label>
    <Col sm="8">
      <Form.Control type="text" placeholder="Enter Short Description" />
    </Col>
  </Form.Group>


  


 
</Form>


</Card.Body>
</Card>


            </div>
        )
    }
}

export default RegistrNewInstt
