import React from "react";
import JobCard from "./JobCard";
const Jobs= () =>{
    return(
        <div>            <JobCard
            id="101"
            role="Sales Manager"
            company="SRG International"
            exp="5-6"
            salary="Not disclosed"
            location="Faridabad"/>            <JobCard
            id="102"
            role="Accounts-Officer-Banking"
            company="KayPee Food Products"
            exp="4-9"
            salary="275000-400000"
            location="Banglore"/>  
            <JobCard
            id="103"
            role="SAP FICO Consultant"
            company="Bhavana Balkrishna Govekar"
            exp="5-6"
            salary="Not disclosed"
            location="Mumbai"/>  
            <JobCard
            id="104"
            role="Assistant Manager-PLM"
            company="Indigo Airlines"
            exp="1-6"
            salary="Not disclosed"
            location="Faridabad"/>  
            <JobCard
            id="105"
            role="Web Logic Portal"
            company="ezProHub LLc"
            exp="2-5"
            salary="Not disclosed"
            location="Faridabad"/>  
            <JobCard
            id="106"
            role="Account Executive"
            company="Hitech information Fast Services"
            exp="5-6"
            salary="Not disclosed"
            location="Faridabad"/>  
            <JobCard
            id="107"
            role="Sales Manager"
            company="SRG International"
            exp="5-6"
            salary="Not disclosed"
            location="Faridabad"/>        </div>    )
}
export default Jobs;



// import React from "react";
// import ReactDOM from 'react-dom';
// import SingleComment from './SingleComment';
// import { Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom';


// const JobsComponent= () =>{
//     const navigate = useNavigate()
//     const goToApply= () =>{
//       navigate('/id',{state:{props}})
//     }
 
//     return(
//         <div class="container-fluid">
//     <div class="row">
//         <div class="col-12 mt-3">
//             <div class="card">
//                 <div class="card-horizontal">
//                     <div class="card-body">
//                         <h4 class="card-title">Sales Manager</h4>
//                         <p class="card-text">SGR International</p>
//                     </div>
//                 </div>
//                 <div class="card-footer">
//                     <small class="text-muted"><SingleComment
//                     id="12345"
//                      jobtitle =" developer" 
//                       salary = "40000"
//                     location="hyderabad"
//                      /><Link to="/Form"><Button  style={{float:"right" ,marginTop:"-21px"}}variant="primary">Apply</Button></Link> </small>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="row">
//         <div class="col-12 mt-3">
//             <div class="card">
//                 <div class="card-horizontal">
//                     <div class="card-body">
//                         <h4 class="card-title">Accounts Officer - Banking</h4>
//                         <p class="card-text">KAYPEE FOOD PRODUCTS</p>
                    
//                     </div>
//                 </div>
//                 <div class="card-footer">
//                     <small class="text-muted"><SingleComment
//                     id="2"
//                      jobtitle =" developer" 
//                       salary = "40000"
//                     location="hyderabad"
                    
//                      /><Link to="/Form"><Button  style={{float:"right" ,marginTop:"-21px"}}variant="primary">Apply</Button></Link> </small>
               
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="row">
//         <div class="col-12 mt-3">
//             <div class="card">
//                 <div class="card-horizontal">
//                     <div class="card-body">
//                         <h4 class="card-title">SAP FICO Consultant</h4>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     </div>
//                 </div>
//                 <div class="card-footer">
//                     <small class="text-muted"><SingleComment
//                       id="1234"
//                      jobtitle =" developer" 
//                       salary = "40000"
//                     location="hyderabad"
//                      /><Link to="/Form
//                      " > 
//                      <Button  style={{float:"right" ,marginTop:"-21px"}}variant="primary">Apply</Button></Link> </small>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="row">
//         <div class="col-12 mt-3">
//             <div class="card">
//                 <div class="card-horizontal">
//                     <div class="card-body">
//                         <h4 class="card-title">Assistant Manager= PLM</h4>
//                         <p class="card-text">Bhavana Balkrishna Goverkar</p>
//                     </div>
//                 </div>
//                 <div class="card-footer">
//                     <small class="text-muted"><SingleComment
//                      jobtitle =" developer" 
//                       salary = "40000"
//                     location="hyderabad"
//                      /><Link to="/Form"><Button  style={{float:"right" ,marginTop:"-21px"}}variant="primary">Apply</Button></Link> </small>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="row">
//         <div class="col-12 mt-3">
//             <div class="card">
//                 <div class="card-horizontal">
//                     <div class="card-body">
//                         <h4 class="card-title">Assistant Manager PLM</h4>
//                         <p class="card-text">Indigo Airlines</p>
//                     </div>
//                 </div>
//                 <div class="card-footer">
//                     <small class="text-muted">
//                     <SingleComment
//                      jobtitle =" developer" 
//                       salary = "40000"
//                     location="hyderabad"
//                      /><Link to="/Form"><Button  style={{float:"right" ,marginTop:"-21px"}}variant="primary">Apply</Button> </Link></small>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="row">
//         <div class="col-12 mt-3">
//             <div class="card">
//                 <div class="card-horizontal">
//                     <div class="card-body">
//                         <h4 class="card-title">Web Logic Portal</h4>
//                         <p class="card-text">ezProHub LLC</p>
//                     </div>
//                 </div>
//                 <div class="card-footer">
//                     <small class="text-muted"><SingleComment
//                      jobtitle =" developer" 
//                       salary = "40000"
//                     location="hyderabad"
//                      /><Link to="/Form"><Button  style={{float:"right" ,marginTop:"-21px"}}variant="primary">Apply</Button> </Link></small>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="row">
//         <div class="col-12 mt-3">
//             <div class="card">
//                 <div class="card-horizontal">
//                     <div class="card-body">
//                         <h4 class="card-title">Account Executive </h4>
//                         <p class="card-text">Hitech Information Fast Services</p>

//                     </div>
                   
//                 </div>
//                 <div class="card-footer">
//                     <small class="text-muted"><SingleComment
//                      jobtitle =" developer" 
//                       salary = "40000"
//                     location="hyderabad"
//                      /><Link to="/Form
//                      "><Button  style={{float:"right" ,marginTop:"-21px"}}variant="primary">Apply</Button> </Link></small>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
        
//     )
// }

// export default JobsComponent;