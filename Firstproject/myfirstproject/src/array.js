import React from "react";

function NameList(){
    const names=['Arun','Aswin','Annamalai','Bhuvanesh','karthi']
    const namelist=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    return<div>{namelist}</div>
}
export default NameList;