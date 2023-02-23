import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate} from 'react-router-dom';
// import './css/JobsCard.css'
const JobCard= (props) => {
  const navigate = useNavigate()
   const goToApply= () =>{
     navigate('/Apply',{state:{props}})
   }
  return (
    <div>    <Card>      <Card.Body>
      <h8>{props.id}</h8>
    <Card.Title>{props.role}</Card.Title>
    <Card.Text>
      <p>{props.company}</p>
      <Icon.Briefcase/>
      {props.exp} yrs
          <span style={{marginRight:'25px'}}/>
          <Icon.CurrencyRupee/>{props.salary}
          <span style={{marginRight:'25px'}}/>
          <Icon.GeoAlt/>{props.location}
          <span style={{marginLeft:'800px'}}/>
          {/* <Link to="/id"> */}
                        <button className='btn btn-primary' style={{float:"right"}} onClick={goToApply}>Apply</button>                        {/* </Link> */}
        </Card.Text>      </Card.Body>    </Card>   <br/>    </div>  );
}
export default JobCard;
// import React from 'react';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import * as Icon from 'react-bootstrap-icons';
// // import { Rating } from 'semantic-ui-react';

//  const SingleComment = (props) => {
// return(
//    <div className='comment'>
      
//                   <div className='Job_details'>
//                   {props.id}
//                     <i className="bi bi-briefcase" style ={ {margin :"25px"}}> {props.jobtitle}</i>
//                     <Icon.CurrencyRupee/>{props.salary}
//                     <span style ={ {margin :"25px"}}>
//                     <Icon.GeoAlt/>{props.location}
//                    </span></div>
//                          </div>
//                           )}
//                      export default SingleComment;