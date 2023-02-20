import React from 'react';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import  { useState,useEffect } from 'react';
import {toast} from"react-toastify";
import './home.css';
import './model.css';
import axios from "axios";
import { HiOutlineTrash } from "react-icons/hi";
import { VscEdit } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import Searchadd from './Searchadd';
import Model from './Model';

function Home() {

const [data,setData]=useState([]);
const [openmodel,setopenmodel]=useState(false);
const [open,setopen]=useState(false);
const [deleteData,setDeleteData]=useState(false);

 
const loadData= async()=>{
    const response=await axios.get("http://localhost:5000/api/get");
    setData(response.data);
};

useEffect(()=>{
  loadData();
},[]);

const deletecontact=(id)=>{
  // if(window.confirm("are you sure you want delete")){
    axios.delete(`http://localhost:5000/api/remove/${id}`);
     toast.success("contact deleted sucessfully");
     setopenmodel(false);
     setTimeout(()=> loadData() ,500);
     console.log("deleted");
  // }
};

const deletecontact1=()=>{
  // if(window.confirm("are you sure you want delete")){
    axios.delete(`http://localhost:5000/api/remove/${deleteData?.id}`);
     toast.success("contact deleted sucessfully");
     setopen(false);
     setTimeout(()=> loadData() ,500);
     console.log("deleted");
  // }
};

console.log(deleteData);
function openDelete(item){
  setopen(true);
  setDeleteData(item)
}

  return (
    <div style={{marginTop:"20px"}}>
      <h3 className='stu-heading'>students Management System</h3>
 
  
      <Searchadd/>

      <Table striped bordered hover responsive className='style-table'  >
        <thead>
        <tr  className="row-height">
          <th>No</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Location</th>
          <th>Email</th>
          <th>Dob</th>
          <th>Education</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
   
        {data.map((item,index)=>{
          return(
            <tr key={item.id}>
              <th scope='row' >{index+1}</th>
                   
                   <td>{item.firstname}</td>
                   <td>{item.lastname}</td>
                   <td>{item.location}</td>
                   <td>{item.email}</td>
                   <td>{item.dob}</td>
                   <td>{item.education}</td>

                   <td>
                    <Link to={`/update/ ${item.id}`}>
                      <button className='btn btn-edit'> <VscEdit size="10px" />Edit</button>
                      </Link>
                    
                    {/* <button className='btn  btn-delete' onClick={()=>{setopenmodel(true)}} > <HiOutlineTrash />Delete</button> */}

                    <button className='btn  btn-delete' onClick={()=>{openDelete(item)}} > <HiOutlineTrash />Delete</button>
                 
                   </td>
       
            </tr>
          )
        })}
    
        </tbody>

        </Table>

{/* 
        { openmodel && <><div className='modelcontainer'>
              
              <div className='icon-s'><HiOutlineTrash size="60px" /></div>
              <div className='title'>Are You Sure You Want to Delete</div>
              <div className='btn-f'>
              <button className='btn1' onClick={() => setopenmodel(false)}>Cancel</button>


               <button className='btn2' onClick={()=>deletecontact(data[0].id)}>Yes</button>
               </div>
          </div> 
         <button className='btn1' onClick={() => setopenmodel(false)}>Cancel</button>
          <button className='btn2' onClick={()=>deletecontact(data[0].id)}>Yes</button>   
          
              </>}  */}
    
       
      
      

      <Model
       open={open}
       closeDialog={()=>setopen(false)}
       title={deleteData?.firstname}
       deleteFunction ={deletecontact1}/>

         
      </div>
  )
}

export default Home;
