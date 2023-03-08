// import { modalClasses } from "@mui/material";
import React from "react"
import oip from "./OIP.jpg";
import  "./modal.css"
const Modal=({open,onClose})=>{
    if(!open)return null;
    return(
        <div onClick={onClose} className="overlay">
            <div className="modalContainer">
                <img src={oip} alt=""></img>
                <div className="modalRight">
                    <p onClick={onClose} className="closeBtn">X</p>
                    <div className="content">
                        <p>Do you want a </p>
                        <h1>$20 CREDIT</h1>
                        <p> for your first trade?</p>

                    </div>
                    <div className="btn-container">
                        <button className="btnprimary">
                            <span className="bold">Yes</span>,I love NFT'S
                        </button>
                        <button className="btnOutline">
                            <span className="bold">No</span>,Thanks
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
}
export default Modal;