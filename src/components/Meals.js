/*
A component to render a list of meals from the ingredient searched.
*/

import React from 'react';
import {MealTile} from './MealTile';

export class Meals extends React.Component {
    render() {
        return (
            <div>
                <MealTile />
            </div>
        );
    }
}