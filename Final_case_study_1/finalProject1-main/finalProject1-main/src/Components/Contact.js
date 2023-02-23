import React from"react";
import ContactForm from "./getInTouch";
import * as Icon from "react-bootstrap-icons";
 const Contact=()=>{
     return(
     <div>
<ContactForm></ContactForm>
<div class="card text-center">
  <div class="card-header" style={{backgroundColor:"#dc3545"}}>
  Our Contact Info
  </div>
  <div class="card-body">
   
       <li style={{float:"left"}}>Phone:9176435688</li>
       <li style={{float:"center"}}><Icon.GeoAlt /> #144 2nd street  Banglore.</li>
       <li style={{float:"right",marginTop:"-20px"}}>Email:topjobs@gmail.com</li>
  
    
  </div>
  
</div>
         </div>)
 }
 export default Contact;







// import React,{useState} from "react";
// import { Container, Row, Col, Toast } from "react-bootstrap";
// import { contactConfig } from "./content_option";
// import './css/Contact.css';
// // import { useNavigate } from "react-router-dom";
// // import Axios from 'axios'

// const Contact = () =>{
//    const[name,namechange]=useState("");
//    const[email,emailchange]=useState("");
//    const[message,messagechange]=useState("");
// //    const navigate = useNavigate();

//     const handlesubmit=(e)=>{
//         e.preventDefault();
//         let regobj={name,email,message};
//         console.log(regobj);
//         alert("Sent Successfully")
//         fetch("  http://localhost:2000/posts",{
//             method:"POST" ,
//             headers:{'content-type' : 'application/json'},
//             body:JSON.stringify(regobj)

//         })
//         // .then((res)=>{
//         //    Toast.success('Sent Successufully')
//         //         navigate('/home');
                      
//         // })
//         // .catch((err)=> {
//         //     Toast.error('failed'+err.message)
//         // });


//     }
//      const validate = (values) => {
//          const errors = {};
//          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//          const format = /^[A-Za-z]+$/;
        
//          if (!values.name) {
//            errors.name = "Username is required!";
//          }
//     else if (values.name.length > 10) {
//            errors.name = "Name cannot exceed more than 10 characters";
//         }
//          else if (!format.test(values.name)) {
//            errors.name = "This is not a valid username format!";
//         }
//          if (!values.email) {
//           errors.email = "Email is required!";
//          } else if (!regex.test(values.email)) {
//          errors.email = "This is not a valid email format!";
//          }
//          if (!values.message) {
//           errors.message = "experience is required";
//         } else if (values.message.length < 10) {
//          errors.message = "experience must be more than 10 characters";
//        } else if (values.message.length > 150) {
//           errors.message = "experience cannot exceed more than 150 characters";
//        }
//          return errors;
//        };
    
//     return(
//         <div className="mainContact">
//         <Container style={{height:"550px",marginTop :"-14px"}}>

//         <Row className="mb-5 mt-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">Contact Me</h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row className="sec_sp">
//           <Col lg="5" className="mb-5">
//             <h3 className="color_sec py-4">Get in touch</h3>
//             <address>
//               <strong>Email:</strong>{" "}
//               <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//                 {contactConfig.YOUR_EMAIL}
//               </a>
//               <br />
//               <br />
//               {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//                 <p>
//                   <strong>Phone:</strong>
//                    {contactConfig.YOUR_FONE}
//                 </p>
//               ) : (
//                 ""
//               )}
//             </address>
//             <p>{contactConfig.description}</p>
//           </Col>
//           <Col lg="7" className="d-flex align-items-center">
             
//             <form  className="contact__form w-100" onSubmit={handlesubmit}>
//               <Row>
//                 <Col lg="6" className="form-group">
//                   <input  value ={name} onChange={(e)=>namechange(e.target.value)} 
                   
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     placeholder="name" 
//                     type="text"
//                     required 
//                   />
//                 </Col>
//                 <Col lg="6" className="form-group">
//                   <input  value ={email} onChange={(e)=>emailchange(e.target.value)} 
//                     className="form-control rounded-0"
//                     id="email"
//                     name="email"
//                     placeholder="email"
//                     type="email" 
//                     required 
//                   />
//                 </Col>
//               </Row>
//               <input  value ={message} onChange={(e)=>messagechange(e.target.value)} 
//                 className="form-control rounded-0"
//                 id="message"
//                 name="message"
//                 placeholder="message"
//                 rows="5" 
//                 required
//               ></input>
//               <br />
//               <Row >
//                 <Col lg="12" className="form-group">
//                   <button className="btn btn-primary" type="submit"> 
//                   Send
//                   </button>
//                 </Col>
//               </Row>
//               <div className="mainContact"></div>
//             </form>
         
//           </Col>
//         </Row>
//       </Container>
//       </div>
//     )
// }
// export default Contact