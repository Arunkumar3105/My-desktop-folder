import React,{useState} from "react";
import Mymodal from "./mymodal.js"
import Dor from "./doctor1.js"
function Tailwind(){
   const[showMymodal,setshowMymodal]=useState(false)
   const handleonClose=()=>setshowMymodal(false)
    return(
        <div className="bg-blue-400 bg-opacity-30">
            <div  >
                <div className="text-center py-3">
                    <button onClick={()=>setshowMymodal(true)} className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl">open modal</button>
                
               </div>
               <Dor/>
            </div>
            <Mymodal onClose={handleonClose} visible={showMymodal}/>
        </div>
        
    )
}
export default Tailwind;