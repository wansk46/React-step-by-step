import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number:0}
  alertUser = () => {alert("now you know how to handle onclick event")}
  add1toNumber = () => {
    this.state.number++;
    this.setState({number:this.state.number});
}

  render() {
    return (
      <div className="">
      <button onClick ={this.props.clickedFunction}>clickedFunction</button>
      <span>number:{this.props.defaultNum}</span>
      </div>
    );
  }
}

export default App;
