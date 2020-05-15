import React, { Component } from 'react'
import { Card, Table, Modal, Form} from 'react-bootstrap';
 class Issuecertf extends Component {
    state = {
        show:false
    }
    setShow = () =>{
        this.setState({
            show:true
        })
    }
    hideFn = () =>{
        this.setState({
            show:false
        })
    }


  render() {
      return (
      <>
           <Card size="lg" className="mobcard p-3"  >

<h2>Issue Certificate</h2>
<Card.Body>  



<br/>
<br/>

<Table responsive>
<thead>
  <tr>
    <th >S.no <br/>
    </th>
    <th >Student Name <br/>
   </th>
    <th  >Student ID <br/>
    </th>
    <th >Institute Name <br/>
  </th>
  <th ><button onClick={this.setShow} 
style={{backgroundColor:"blue", border:"0px", color:"#FFF",borderRadius:"1.5rem"}}

>View</button> <br/>
  </th>

  </tr>

</thead>
<br/>


<tbody>
  <tr>
    <td >1</td>
    <td>Marble Cake</td>
    <td>wedding </td>

    <td>
  GMIT
   </td>
   <td><button onClick={this.setShow} 
style={{backgroundColor:"#20b38e", border:"0px", color:"#FFF",borderRadius:"1.5rem"}}

>View</button> </td>
  </tr>
  <br/>



  <tr>
    <td>2</td>
    <td>Marble Cake</td>
    <td>wedding Cake </td>

    <td>
niit
        </td>
        <td><button onClick={this.setShow} 
style={{backgroundColor:"#20b38e", border:"0px", color:"#FFF",borderRadius:"1.5rem"}}

>View</button> </td>
 
  </tr>
  <br/>


  
  <tr>
    <td>3</td>
    <td>Marble Cake</td>
    <td>wedding </td>

    <td>
IIT
        </td>

        <td><button onClick={this.setShow} 
style={{backgroundColor:"#20b38e", border:"0px", color:"#FFF",borderRadius:"1.5rem"}}

>View</button> </td>
  </tr>
  
</tbody>
</Table>

</Card.Body>
</Card>

          

<Modal className="rightside"
      show={this.state.show}
      onHide={this.hideFn}
      dialogClassName="modal-20w "
      aria-labelledby="example-custom-modal-styling-title"
    >
<Modal.Title id="example-custom-modal-styling-title" 
style={{color:"#32062c",marginTop:"2rem", marginBottom:"-1rem"}}>
       Aprrove Certificate
        </Modal.Title>
       
    
      <Modal.Body style={{marginLeft:"0px"}}>
    
<br/>

<label> Student ID   </label> 
<br/>
<input style={{width:"100%", height:"6vh"}} placeholder=" Student ID "></input>
<br/>


<label> 
    Name of Student
       </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Name of Student"></input>
<br/>
<br/>

<label> Batch ID   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Batch ID"></input>
<br/>


<label> Class Number   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Class Number"></input>
<br/>

<label> DOB   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="DOB"></input>
<br/>

<label> Email   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Email"></input>
<br/>

<label> Contact   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Contact"></input>
<br/>

<label> Alternate Contact   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Alternate Contact"></input>
<br/>

<label> Address   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Address"></input>
<br/>

<label> Institute ID   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Institute ID "></input>
<br/>

<label> Course ID   </label><br/>
<input  style={{width:"100%", height:"6vh"}}  placeholder="Course ID"></input>
<br/>


<br/><br/>
<button   style={{border:"0px", borderRadius:"1.5rem",color:"#fff",height:"2rem",
backgroundColor:"blue", fontSize:"0.8rem"
}}>Approve</button>

<button  show={this.state.show}
      onClick={this.hideFn}
style={{border:"0px", borderRadius:"1.5rem",color:"#fff", width:"4rem",height:"2rem",
backgroundColor:"rgb(202, 69, 69)", fontSize:"0.8rem", marginLeft:"3px"
}}
>Disapprove</button>
      </Modal.Body>
    </Modal>



</>
        )
    }
}

export default Issuecertf
