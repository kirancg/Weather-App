import React from 'react';
//import { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "cb1f26f55636d5d59780ec7804711583";
                

class App extends React.Component {
  state = {
    temperature: undefined,
    realFeel: undefined,
    city: undefined,
    country:undefined,
    humidity:undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();

    if (city && country) {
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        realFeel: data.main.feels_like,
        city: data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } 
    else {
      console.log(data);

      this.setState({
        temperature: undefined,
        realFeel: undefined,
        city: undefined,
        country:undefined,
        humidity:undefined,
        description: undefined,
        error: "Please enter name of the city and country"
      })
    } 
}
    

  //built react method returns JSX(JS with HTML)(Babel converts it into JavaScript)
  render() {
    return (
      <div>
        <Title />
        <Form getWeather = {this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          realFeel = {this.state.realFeel}
          city = {this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
         />
      </div>
      
    //Can return only one parent element
    //Use Fragment for more div
    )
  }
}

export default App;