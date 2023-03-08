import react, { useState } from 'react'

function Hide(){
    const[show,setshow]=useState(false)
    return(<div>{
        show?<h1>helloworld</h1>:null}
        <button onClick={()=>setshow(true)}>show</button>
        <button onClick={()=>setshow(false)}>hide</button>
        <button onClick={()=>setshow(!show)}>toggle</button>
    </div>
        )
}
export default Hide;