import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Home from './pages/home';
import Addform from './pages/addform';
import Searchadd from "./pages/Searchadd";

function App() {
  return (
    <BrowserRouter>
      
    <div className='App'>
    <ToastContainer position="top-center"/>
      <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/" element={<Model/>} /> */}
      <Route path="/addform" element={<Addform/>} />
      <Route path="/update/:id" element={<Addform/>} />
       <Route path="/" element={< Searchadd/>}/>
    
     </Routes>
      
    </div>
    </BrowserRouter>
   );
}

export default App;
