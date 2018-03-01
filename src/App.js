import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {

   state = {
    txtArray: [],
    showBoxes: true
   };

   

  inputLengthHandler = (event) => {
    const txtArray = event.target.value.split('');

    this.setState({
      txtArray: txtArray
      
    })
    console.log(txtArray)
  }

 removePersonHandler = (index) => {
    const txtArray = [...this.state.txtArray];
    txtArray.splice(index, 1);
    this.setState({txtArray: txtArray});
  }
  
  render() {

    let Chars = '';
    if(this.state.showBoxes) {
       Chars = (
        <div>
          {this.state.txtArray.map((letter, index) => {
            return <Char
               letter={letter} 
               click={() => { this.removePersonHandler(index) }} 

             />
          })}
        </div>
        )
         }
      
    return (
      <div  className="App App-header">
        <input type="text" onChange={this.inputLengthHandler} />
        <Validation inputText={this.state.txtArray} />
        {Chars}

        

      </div>
    );
  }
}

export default App;
