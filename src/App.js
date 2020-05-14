import React from 'react';
//import { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "cb1f26f55636d5d59780ec7804711583";
                

class App extends React.Component {
  
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }     

  //built react method returns JSX(JS with HTML)(Babel converts it into JavaScript)
  render() {
    return (
      <div>
        <Title />
        <Form getWeather = {this.getWeather} />
        <Weather />
      </div>
      
    //Can return only one parent element
    //Use Fragment for more div
    )
  }
}

export default App;