import React from "react";
const datel14 = {
    width: '140px',
    backgroundColor: 'teal',
    height: '40px',
    color: 'white'

}
const data = [{}
]

function Dor4() {
    return (
        <div>
            <div id="tal1">
                <p id="tal2">Date-LocationName-DoctorName</p>
                <p id="tal3">Ready To Visist  Claimants  <span id="tal5">Count</span></p>
                <input type="button" value="Export To Excel" id=" tal4" style={datel14} />
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
                            <th>Stage</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.no}</td>
                                        <td>{value.firstName}</td>
                                        <td>{value.lastName}</td>
                                        <td>{value.claim}</td>
                                        <td>{value.company}</td>
                                        <td>{value.stage}</td>
                                        <td>
                                            <input type="button" value="Delete" />
                                            <input type="button" value="DeActive" />
                                            <input type="button" value="Edit" />
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div><br /><br />
        </div>
    )
}
export default Dor4;