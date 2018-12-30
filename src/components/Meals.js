/*
A component to render a list of meals from the ingredient searched.
*/

import React from 'react';

export class Meals extends React.Component {
    render() {
        return (
            <div>
                {this.props.ingredient && <h2>Meals containing {this.props.ingredient}</h2>}
                {this.props.meals}
            </div>
        );
    }
}