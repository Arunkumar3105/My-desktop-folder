import React from "react";
import './first.css'
import Dor1 from "./doctor2";
import Dor2 from "./doctor3";
import Dor4 from "./doctor4";
const datel={
    width:'140px',
    backgroundColor:'teal',
    height:'40px',
    color:'white'
    
}
const data = [
]
function Dor() {
    return (
        <div>
            <div id="tal1">
                <p id="tal2">Date-LocationName-DoctorName</p>
                <p id="tal3">Total Claimants  <span id="tal5">Count</span></p>
                <input type="button" value="Export To Excel" style={datel}/>
            </div> <br /><br />
            <div >
                <table className="dor2">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Claim#</th>
                            <th>Company</th>
                           <th>Audit Trail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value,key)=>{
                                return(
                                    <tr key={key}>
                                        <td>{value.No}</td>
                                        <td>{value.firstName}</td>
                                        <td>{value.lastName}</td>
                                        <td>{value.claim}</td>
                                        <td>{value.company}</td>
                                        <td>{value.audit}</td>
                                        
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div><br/><br/>
            <Dor1/>
            <Dor2/>
            <Dor4/>
        </div>
    )
}

export default Dor;