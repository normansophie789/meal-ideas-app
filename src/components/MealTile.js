/*
A component to render each meal as a tile in the Meals component.
*/

import React from 'react';

export class MealTile extends React.Component {
    render() {
        return (
            <div class="meal_tile">
                <a href={this.props.link}>
                    <img src={this.props.image_src} alt={this.props.title} />
                </a>
                <p>{this.props.title}</p>
            </div>
        );
    }
}