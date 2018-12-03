import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number:0}
  add1toNumber = () => {
    this.state.number=this.props.clickedFunction(this.state.number);
    this.setState({number:this.state.number});
}

  render() {
    return (
      <div className="">
      <button onClick = {this.add1toNumber}>click {this.props.who}</button>
      <span>Number:{this.state.number}</span>
      </div>
    );
  }
}

export default App;
