import React, {Component} from 'react';
import './App.css';



let marked =require('marked');

class App extends Component {
  
  state ={
    markdown:"Hello\n=======\n\nWorld\n-----------\n \n### How are you\n \nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nList one:\n\n  * sunny\n  * cloudy\n  * rainy\n\nList 2:\n\n  1. coffee\n  2. tea\n  3. pop\n\nTry it yourself.\n\n"
  }

  
  updateMarkdown = function(markdown){
    this.setState({markdown});
  }

  render() {
    let{markdown} =this.state;
    console.log(markdown);
    return (
      <div className="App container">
      <div>
      <form>
      <h1>Markdown Input</h1>
      <input type="text" placeholder="Enter Markdown" value={markdown} onChange= {(event)=>this.updateMarkdown(event.target.value)}>
      
      </input>
      </form>
      </div>
      <div>
      <h1>Markdown Output</h1>
      <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}>

      </div>
      </div>
      </div>
      
      );
    }
  }
  
  
  export default App;
  