import React, { Component } from 'react'
import { Card,  Form, Row, Col} from 'react-bootstrap';


class CreateCourse extends Component {
    state = {
      launchyes:false,
        show:false
    }

    handlechange=(e) =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    setShow = () =>{
        this.setState({
          
            show:true
        })
    }

    setLaunch = () =>{
      this.setState({
       
          launchyes:true,
        
      })
  }


  hidelaunch = () =>{
    this.setState({
     
        launchyes:false
    })
}


    hideFn = () =>{
        this.setState({
    
            show:false
        })
    }
    render() {
        return (
          <div>
   <Card size="lg" className="mobcard p-3"  >

<Card.Body>  

<Form>
 

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
     Institute ID
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="name" onChange={this.handlechange} type="text" placeholder=" Institute ID " />
    </Col>
  </Form.Group>



  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="4">
   Name of the course
    </Form.Label>
    <Col sm="8">
      <Form.Control  name="institute_Owner"  onChange={this.handlechange} 
      type="text" placeholder="Enter the Name of the course " />
    </Col>
  </Form.Group>
  <br/>

  <button   style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",width:"4rem",
backgroundColor:"rgb(19, 130, 23)", fontSize:"0.8rem"
}}>Add</button>

<button show={this.state.show}
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

export default CreateCourse
