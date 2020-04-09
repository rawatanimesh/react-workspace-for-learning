import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) =>{
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler= (i) =>{
    const charArray = this.state.userInput.split('');
    charArray.splice(i,1);
    const updatedText = charArray.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList  = this.state.userInput.split('').map((ch,index) =>{
      return <Char char={ch} 
      key={index} 
      clicked={() =>this.deleteCharHandler(index)}/>
    })
    return (
      <div>
        <div>Module 4</div>
        <input type="text" 
        onChange={this.inputChangedHandler} 
        value={this.state.userInput}/>  
        <p>{this.state.userInput}</p>
        <Validation inputLength= {this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
