
import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom'
import './css/Apply.css';


function Apply() {
  const initialValues = {  username: "", email: "", phonenumber: "" ,address:"",experience: "",};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const[username,usernamechange]=useState("");
  const[email,emailchange]=useState("");
  const[phonenumber,phonenumberchange]=useState("");
  const[address,addresschange]=useState("");
   const[experience,experiencechange]=useState("");
  

   const location = useLocation();
  console.log(location.state)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };
  const jobid = 'jobid';
  const id = location.state.props.id;
  const handleSubmit=(e)=>{
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    e.preventDefault();
    let regobj={
      [jobid] :id,
      ...formValues,};
    console.log(regobj);
    alert("Sent Successfully")
    fetch("   http://localhost:7000/posts",{
        method:"POST" ,
        headers:{'content-type' : 'application/json'},
        body:JSON.stringify(regobj)

    })
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const format = /^[A-Za-z]+$/;
    
    if (!values.username) {
      errors.username = "Username is required!";
    }
    else if (values.username.length > 10) {
      errors.username = "Name cannot exceed more than 10 characters";
    }
    else if (!format.test(values.username)) {
      errors.username = "This is not a valid username format!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "phonenumber is required";
    }  else if (values.phonenumber.length < 10) {
      errors.phonenumber = "phonenumber cannot be less then  10 numbers";
    }
    else if (values.phonenumber.length > 10) {
      errors.phonenumber = "phonenumber cannot be more then  10 numbers";
    }
    if (!values.experience) {
      errors.experience = "experience is required";
    } else if (values.experience.length < 10) {
      errors.experience = "experience must be more than 10 characters";
    } else if (values.experience.length > 150) {
      errors.experience = "experience cannot exceed more than 150 characters";
    }
    return errors;
  };

  return (
    <div className="Container1">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Application submitted successfully</div>
      ) : (
        <pre></pre>
      )}
      <div className="header">
<h2>Applying for JOB ID {location.state.props.id}</h2></div>
      <form onSubmit={handleSubmit}>
      
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input 
            onChange={(e)=>usernamechange(e.target.value)}
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
             onChange={(e)=>emailchange(e.target.value)}
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Phone Number</label>
            <input 
            onChange={(e)=>phonenumberchange(e.target.value)}
              type="text"
              name="phonenumber"
              placeholder="phonenumber"
              value={formValues.phonenumber
              }
              onChange={handleChange}
              
            />
          </div>
          <p>{formErrors.phonenumber}</p>
          <div className="field">
            <label>Address</label>
            <input 
            onChange={(e)=>addresschange(e.target.value)}
              type="text"
              name="address"
              placeholder="Address (Optional)"
              value={formValues.address
              }
              onChange={handleChange}
             
            />
          </div>
          <p>{formErrors.address}</p>
          <div className="field">
            <label>Experience</label>
            <textarea rows="3"
         onChange={(e)=>experiencechange(e.target.value)}
              type="text"
              name="experience"
              placeholder="experience"
              value={formValues.experience
              }
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.experience}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Apply;
