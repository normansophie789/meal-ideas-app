import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Title} from './components/Title';
import {Form} from './components/Form';
import {Meals} from './components/Meals';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Meals />
      </div>
    );
  }
}

export default App;
