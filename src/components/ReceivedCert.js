import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class ReceivedCert extends Component {

render() {
return (


    <div className="mobcard">

    
    <Card className=" p-3" style={{minHeight:"20vh"}}>


  <div class="row">


  <div class="col-md-2 col sm-12 text-center" >
  <Card.Img style={{ width: '100%',borderRadius:"15px"}} variant="top"
 src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0018/2124/brand.gif?itok=FMMm9a26" />

 <p className="mt-2" style={{fontSize:"19px", fontWeight:"500"}}> Oxford University</p>

  </div>



  <div class="col-md-10 col sm-12">
  
  


<span style={{float:"left", margin:"0", fontSize:"2rem", marginTop:"-10px"}}>MBA</span> 
<span style={{float:"right", margin:"0", fontSize:"1rem"}}>12-12-2020</span>

<br/>
<hr />
<p style={{fontSixe:"1.3rem", fontWeight:"700"}}>Short Description</p>
<Card.Text>
A course description is a breif summary of th significant learning experiences for a course. 
Course descriptions apperar in individual Course Outlines in the Program of Studies (POSs) 
for individual programs.
</Card.Text>
<hr/>

<p style={{float:"left"}}>Certificate Id: #23644726</p><span> <p style={{float:"right"}}>Change-Request View Share </p></span>
<br/>
<hr />
  </div>
  

</div>


</Card>

</div>

);
}
}

export default ReceivedCert;