import React from 'react';
import { useState } from 'react';
import Home from './components/home.js'
import About from './components/about.js'
import Contact from './components/contact.js'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
const linkStyle={
    textDecoration: "none",
    color:'black',
   
  
   

};
const linkStyles={
    textDecoration: "none",
    color:'black',
    
   

};
const flex={
    display:'flex',
  width:'100%'
}

function Side (){
    const[display,setdisplay]=useState(false)
    const[createuser,setcreateuser]=useState(false)
   return(
            <Router>
                <div style={flex}>
                <div className='links'>
                    <ul>
                       <li>
                           <Link  style={linkStyle} to ="/" onClick={()=>setdisplay(!display)}>< FaHeart style={{verticalalign:'30px'}}/>User </Link>
                          
                        </li>
                        {display? 
                               <div> <li> <Link  style={linkStyle} to ="/" onClick={()=>setcreateuser(!createuser)}>Create User</Link></li>  
                               {createuser? 
                       <ul id='createuserlist'><li><Link style={linkStyles}>Admin</Link></li>
                        <li><Link style={linkStyles}>Scheduler</Link></li>
                        <li><Link style={linkStyles}>FrontDesk</Link></li>
                        <li><Link style={linkStyles}>Doctor Assistant</Link></li>
                        <li><Link style={linkStyles}>Doctor</Link></li></ul> 
                      :null}
                                <li> <Link style={linkStyle} to ="/">View User</Link></li></div>:null}
                          
                     
                      <li>
                            <Link to ="/about" style={linkStyle}>About</Link>
                        </li>
                        <li>
                            <Link to ="/contact" style={linkStyle}>Contact</Link>
                        </li>
                    </ul>
                    </div><div>
                    <Routes>
                        <Route exact path='/' element={<Home/>}></Route>
                        <Route exact path='/about' element={<About/>}></Route>
                        <Route exact path='/contact' element={<Contact/>}></Route>
                    </Routes>
                </div>
                </div>
            </Router>
        );
    }

export default Side;