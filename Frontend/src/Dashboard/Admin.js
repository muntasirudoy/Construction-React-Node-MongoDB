import React from 'react';
import './admin.css'
import { Routes, Route} from "react-router-dom";
import About from './About';


const Admin = () => {
  
  return <>
            <Routes>
               <Route path="/about" element={<About />} /> 
            </Routes>

  </>;
};

export default Admin;
