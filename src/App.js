import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Title} from './components/Title';
import {Form} from './components/Form';
import {Meals} from './components/Meals';
import {MealTile} from './components/MealTile';
import {Api_Key} from './api-call-constant';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {meals: []};
  }

  render() {
    return (
      <div>
        <Title />
        <Form handleSubmit={this.retrieveMeals} />
        <Meals meals={this.state.meals}/>
      </div>
    );
  }

 

  
}

export default App;
