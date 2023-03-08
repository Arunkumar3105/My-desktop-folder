import React,{useState} from "react";
import Modal from "./Modal.js"
function Modal1(){
    const[openModal,setopenModal]=useState(false)
    return(
        <div>
            <button onClick={()=>setopenModal(true)}>Modal</button>
            <Modal open={openModal} onClose={()=>setopenModal(false)}></Modal>
        </div>
    );
}
export default Modal1;