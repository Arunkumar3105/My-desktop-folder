import React,{Component} from "react";
import {usestate} from "react"
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome Arunkumar'
        }
    }
    changemessage(){
        this.setState({
            message:'thank you for subscribing'
        })
    }
   
    render(){
        return(
            
        <div>
              <h1>{this.state.message}</h1>
              <button onClick={()=>this.changemessage()}>subscribe</button>                                                                                                                                                                                
        </div>
         
        );
    }
}
export default Message