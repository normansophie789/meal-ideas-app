/*
A component to render each meal as a tile in the Meals component.
*/

import React from 'react';

export class MealTile extends React.Component {
    render() {
        return (
            <div class="meal_tile">
                <img src={this.props.image_src} alt="image of recipe" />
                <p>{this.props.title}</p>
            </div>
        );
    }
}