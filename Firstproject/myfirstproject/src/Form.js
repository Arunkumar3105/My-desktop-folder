import React from "react";
class Form extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            topic:'react'
        }
    }
    formusername=event=>{
        this.setState({
            username:event.target.value
        })
    }
    formemail=event=>{
        this.setState({
            email:event.target.value
        })
    }
    topicchange=event=>{
        this.setState({
            topic:event.target.value
        })
    }
    handlesubmit = event =>{
        alert(`${this.state.username} ${this.state.email} ${this.state.topic}`)
       event.preventDefault()
    }
    render(){
    return(
        <form onSubmit={this.handlesubmit}>
        <div>
        <label>username</label>
        <input type='text' value={this.state.username} onChange={this.formusername}/>
        </div>
        <div>
        <label>Email</label>
        <input type='text' value={this.state.email} onChange={this.formemail}/>
        </div>
        <div>
            <label>topic</label>
        <select value={this.state.topic} onChange={this.topicchange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
        </select>
        </div>
        <button type='submit'>Submit</button>
       
        </form>
    )
    }
}
export default Form;