import React from "react";
import Dor from "./doctor1.js";
function Mymodal({visible,onClose}){
    const handleonClose=()=>{
        onClose();
    };
    if(!visible)return null;
    return(
        <div  className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center " >
            <div className="bg-white p-2 ">
            <button className="ml-5" style={{float:"right",fontSize:"20px"}} onClick={onClose}>X</button>
           <br/> <br/><p><Dor/></p>
            
            </div>
        </div>
    )
}
export default Mymodal;