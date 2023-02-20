import React from 'react'
import {useState,useEffect} from 'react';
import {useNavigate,useParams,Link} from 'react-router-dom';
import axios from "axios";
import './addedit.css';
import { VscArrowLeft } from "react-icons/vsc";
import {toast} from "react-toastify";

const initialState={
  Firstname:"",
  Lastname:"",
  Location:"",
  Email:"",
  Dob:"",
  Education:"", 
};


 function Addform() {


const [state,setState]= useState(initialState);
   const {firstname,lastname,location,email,dob,education}=state;

  const navigate=useNavigate();

  const {id}=useParams();

  useEffect(()=>{
     axios.get(`http://localhost:5000/api/get/${id}`)
     .then((req)=>setState({... req.data[0]}));
  },[id])

   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(state);
         if(!firstname || !lastname || !location || !email || !dob || !education){
            toast.error("please provide value into input field");
         }
         else{
          
          if(!id){
            
            axios.post("http://localhost:5000/api/post",{
              firstname,
              lastname,
              location,
              email,
              dob,
              education,
            })
            .then(()=>{
              setState({firstname:"",lastname:"",location:"",email:"",dob:"",education:""});
            })
            .catch((err)=>{
             toast.error(err.response.data)
            });
            toast.success("Student Contact Sucessfully");

          } else{
            axios.put(`http://localhost:5000/api/update/${id}`,{
              firstname,
              lastname,
              location,
              email,
              dob,
              education,
            })
            .then(()=>{
              setState({firstname:"",lastname:"",location:"",email:"",dob:"",education:""});
            })
            .catch((err)=>{
             toast.error(err.response.data)
            });
            toast.success("Student Updated Sucessfully");
          }

       
          setTimeout(()=>{
           navigate("/");
          },500)
         }
   };

   const handleInputChange=(e)=>{
    const {name,value}=e.target;
     setState({...state,[name]:value});
   };
 

  return (
    <div style={{marginTop:"45px"}} >

        <Link to="/">
        <a className='back'> <VscArrowLeft size="22px"/></a>
         </Link> 
  
        <form style={{
          margin:"auto",
          padding:"25px",
          // maxwidth:"500px",
          
        }}
        onSubmit={handleSubmit}
        className="addeditform" >

         <label htmlFor="firstname" className='l1'><b>FirstName:</b></label>
         <input
            type="text"
           id="firstname"
           name="firstname" 
           value={firstname || ""}
           
           onChange={handleInputChange}
         /> 
        
         <label htmlFor="lastName" className='l2'><b>LastName:</b></label>
         <input
           type="text"
           id="lastName"
           name="lastname"
            value={lastname || ""}
           onChange={handleInputChange}
         />  <br/><br/> 

<label htmlFor="location" className='l3'><b>Location:</b></label>
         <input
           type="text"
           id="location"
           name="location"
            value={location || ""}
           onChange={handleInputChange}
         /><br/><br/>

<label htmlFor="email" className='l4'><b>Email:</b></label>
         <input
           type="email"
           id="email"
           name="email"
            value={email || ""}
           onChange={handleInputChange}
         /><br/><br/>

<label htmlFor="dob" className='l5'><b>Dob:</b></label>
         <input
           type="date"
           id="dob"
           name="dob"
            value={dob || ""}
           onChange={handleInputChange}
         /><br/><br/>

<label htmlFor="education" className='l6' ><b>Education:</b></label>
         <input
           type="text"
           id="education"
           name="education"
            value={education || ""}
           onChange={handleInputChange}
         /><br/><br/>
<label className='l7'><b>About:</b>
<textarea  className='text-area'></textarea>
</label>
<br/><br/>

        

          <input type="submit" value={id ? "Update" : "Submit"} className='sub-btn'/> 
        
        </form>

    </div>
  )
}


export default Addform;