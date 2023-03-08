import React, { useState } from "react";
import { FaBars, FaRegChartBar, FaUserAlt,FaTh } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import  './sidebar1.css';

const Sidebar=({children})=>{
    const[isOpen,setisOpen]=useState(true);
const menuItem=[
    {
        path:"/",
        name:"User",
        icon:<FaTh/>,
        submenuItem:[{
            path:"/Admin",
            name:"Admin",
            icon:<FaTh/>
        },{
            path:"/Scheduler",
            name:"Scheduler",
            icon:<FaTh/>
        },{
            path:"/Frontdesk",
            name:"Frontdesk",
            icon:<FaTh/>
        },{
            path:"/DoctorAssistant",
            name:"DoctorAssistant",
            icon:<FaTh/>
        },{
            path:"/Doctor",
            name:"Doctor",
            icon:<FaTh/>
        },
    ]
    },
    {
        path:"/About",
        name:"About",
        icon:<FaUserAlt/>
    },
    {
        path:"/contact",
        name:"Contact",
        icon:<FaRegChartBar/>
    }
]
return(
    <div className="container">
        <div style={{width:isOpen?"250px":"50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display:isOpen?"block":"none"}} className="logo">Dashboard</h1>
                <div style={{marginLeft:isOpen?"50px":"0px"}}className="bars"><FaBars onClick={()=>setisOpen(!isOpen)} /></div>
            </div>
            {
                menuItem.map((item,index) => (
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display:isOpen?"block":"none"}} className="link_text">{item.name}  </div>
                        {/* <div className="sidebar-content">
                            {item.submenuItem.map((child,index)=>)}
                        </div> */}
                    </NavLink>
                ))
            }
            </div>
            <main>{children}</main>
    </div>
)
}
export default Sidebar;