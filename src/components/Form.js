/*
A component to render a form so that the user can search for an ingredient
*/

import React from 'react';

export class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label for="ingredient">Enter Ingredient: </label>
                <input type="text" name="ingredient"></input>
                <button>Search</button>
            </form>
        );
    }
}