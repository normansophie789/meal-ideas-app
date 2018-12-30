/* API used in this project : MealDB from https://www.themealdb.com/api.php */

import React, { Component } from 'react';
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
        <Form handleSubmit={this.getMeals} />
        <Meals meals={this.state.meals}/>
      </div>
    );
  }

  getMeals = async (e) => {
    e.preventDefault();

    const ingredient = e.target.elements.ingredient.value;

    const api_call = await fetch("https://www.themealdb.com/api/json/v1/" + Api_Key + "/filter.php?i=" + ingredient);
    const response = await api_call.json();

    var list = [];
    for (var i in response.meals) {
      list.push(<MealTile title={response.meals[i].strMeal} image_src={response.meals[i].strMealThumb} />);
    }

    this.setState({meals: list});

    console.log(response);
  }

 

  
}

export default App;
