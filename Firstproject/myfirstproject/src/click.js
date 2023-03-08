import React from "react";
class Hello extends React.Component{
    constructor(){

super()
    this.state = {
      active: ''
    }}
    addActiveClass(e){
        const clicked = e.target.id
        if(this.state.active === clicked) { 
            this.setState({active: ''});
        } else {
            this.setState({active: clicked})
       }
    }
  
    render() {
       return (
     <div>
  <div className={`red green blue ${this.state.active === "first"? 'active': ''}`} id="first" onClick={this.addActiveClass}>Hello World</div>
  <div className={`red green blue ${this.state.active === "second"? 'active': ''}`} id="second" onClick={this.addActiveClass}>Good Bye World</div>
    </div>
    
       )
    }
  }
  export default Hello;