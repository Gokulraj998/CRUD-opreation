import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import './home.css';


function Searchadd() {
  return (
    <>
        <div className='space-t'>
         <div className='search-bar'>
         <input type="search" placeholder='search' className='search'/>
         <button className='icon-b'><CiSearch/></button>
         
        <div className='t-add'><Link to="/addform"><button>Add</button> </Link>
        </div>
         </div>
     
      </div>  
      {/* <Link to="/addform"><button className='t-add'>Add</button> </Link>  */}
    </>
  )
}

export default Searchadd;