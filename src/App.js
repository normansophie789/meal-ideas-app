/* API used in this project : Food2Fork */

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

    const api_call = await fetch("https://www.food2fork.com/api/search?key=" + Api_Key+ "&q=" + ingredient + "&page=2");
    const response = await api_call.json();

    var list = [];
    for (var i in response.recipes) {
      list.push(<MealTile title={response.recipes[i].title} image_src={response.recipes[i].image_url} link={response.recipes[i].source_url} />);
    }

    this.setState({meals: list});

    console.log(response);
  }

 

  
}

export default App;
