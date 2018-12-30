/*
A component to render each meal as a tile in the Meals component.
*/

import React from 'react';
import Underscore from 'underscore';

export class MealTile extends React.Component {
    render() {
        var title = this.props.title;
        title = Underscore.unescape(title)
        return (
            <div class="meal_tile">
                <a href={this.props.link}>
                    <img src={this.props.image_src} alt={this.props.title} />
                </a>
                <p>{title}</p>
            </div>
        );
    }
}