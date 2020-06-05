import React, { Component, Fragment } from 'react';
import './App.css';
import Click from './components/Click';
import MouseHover from './components/MouseHover'


class App extends Component{
  constructor(){
    super()
    this.state = {
        name: 'Jhabar'
    }
  }

  changeProp(value){
    console.log(value)
  }

  render(){
    return (
      <Fragment>
        <MouseHover/>
        <br />
        <Click />
      </Fragment>
    );
  }
}

export default App;
