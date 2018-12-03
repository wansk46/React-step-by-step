import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number.js'
import Line from './components/Line.js'

class App extends Component {
  state = {
    number:0, 
    numberArray: new Array(0).fill(0)
  }

  updateNumber = () => {
    let number = this.props.clickedFunction(this.state.number);
    this.setState({
      number: number,
      numberArray: new Array(number).fill(0)
    })
  }
  


  render() {
    return (
      <div className="">
      <button onClick = {this.updateNumber}>click {this.props.who}</button>
      <span><Number PassedNumber={this.state.number}/></span>
      {this.state.numberArray.map(() => <Line/>)}
      </div> 
    );
  }
}



export default App;
