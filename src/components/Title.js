/*
A component to render the title of the app.
*/

import React from 'react';

export class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>Meal Ideas App</h1>
                <p>Search for an ingredient and get a list of meals you can cook!</p>
            </div>
        );
    }
}