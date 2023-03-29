import React, { Component } from 'react'

 class EVENT_HANDLER_CLASS extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }
  
  handleOnChange = (e) => {
    this.setState({
      changedValue : e.target.value
    }, ()=>{
      console.log(this.state.changedValue)
    })

    console.log(this.state.changedValue);
  }
 
  render() {
    return (
      <div>
        <input type={Text} onChange={this.handleOnChange} />
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
export default EVENT_HANDLER_CLASS;