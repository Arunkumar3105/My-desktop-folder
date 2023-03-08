import React from "react";
import './first.css'
const datel13={
    width:'140px',
    backgroundColor:'teal',
    height:'40px',
    color:'white'
    
}
const data = [
]
// {No:'01',firstName:'Aswin',lastName:'Kanagaraj',claim:'0fgr2',company:'scriptyum',audit:'Astyi'}
function Dor2(){
    return (
        <div>
            <div id="tal1" >
                <p id="tal2">Date-LocationName-DoctorName</p>
                <p id="tal3">Not-Seen Claimants  <span id="tal5">Count</span></p>
                <input type="button" value="Export To Excel" id=" tal4" style={datel13} />
            </div> <br /><br />
            <div>
                <table className="dor2">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Claim#</th>
                            <th>Company</th>
                           
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
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div><br/><br/>
        </div>
    )
      
}
export default Dor2;