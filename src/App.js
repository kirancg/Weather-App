import React from 'react';
import { Component } from 'react';
import Title from './components/Title';

//initialize component

class App extends React.Component {
  
  //built react method returns JSX(JS with HTML)(Babel converts it into JavaScript)
  render() {
    return (
      <Title/>
    //Can return only one parent element
    //Use Fragment for more div
    )
  }
}

export default App;