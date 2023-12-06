import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from 'react';

function App() {
  return (
    <div class="main">
       <Router>
           <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/Signup" element={<Signup />}/>
              <Route path="/Home" element={<Home />}/>
           </Routes>   
       </Router>
     
    </div>
  );
}

export default App;
