const { Component } = require("react");

export default class Counter extends Component{
  render(){
    const {value,onIncreaseClick} = this.props
    return(
      <div>
        <span>{value}</span>
        <button onClick = {onIncreaseClick}>Increase</button>
      </div>
    )
  }
}