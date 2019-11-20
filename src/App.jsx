import React, { Component } from 'react';
import './App.css';
import { Button } from "./components/Button";
import { input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({input: this.state.input + val });
  };
     
  handleEqual = () => {
    this.setState({input: math.eval(this.state.input)})
  }


  render() {
    return (
      <div className="app">
         <div className="calc-wrapper">
         <input input={this.state.input}></input>
           <div className="row">
             <button handleClick={this.addToInput}>7</button>
             <button handleClick={this.addToInput}>8</button>
             <button handleClick={this.addToInput}>9</button>
             <button handleClick={this.addToInput}>/</button>
           </div>
           <div className="row">
             <button handleClick={this.addToInput}>4</button>
             <button handleClick={this.addToInput}>5</button>
             <button handleClick={this.addToInput}>6</button>
             <button handleClick={this.addToInput}>x</button>
           </div>
           <div className="row">
             <button handleClick={this.addToInput}>1</button>
             <button handleClick={this.addToInput}>2</button>
             <button handleClick={this.addToInput}>3</button>
             <button handleClick={this.addToInput}>+</button>
           </div>
           <div className="row">
             <button handleClick={this.addToInput}>.</button>
             <button handleClick={this.addToInput}>0</button>
             <button handleClick={() => this.handleEqual()}>=</button>
             <button handleClick={this.addToInput}>-</button>
           </div>
             <div className="row">
              <ClearButton handleClear={() => this.setState({input: "" })}>
              Clear
              </ClearButton>
             </div>
         </div>
      </div>
    );
  }
}
export default App;
