import React from 'react';
import uuidv4 from 'uuid/v4';


export default class StarWarsPeople extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
        fetch('https://torpid-candy.glitch.me/https://swapi.co/api/people/')
            .then(response => response.json())
            .then(data => {
                const people = data.results.map(person => ({id: uuidv4(), ...person}));
                this.setState({people})
            })
    }

    render() {
        return <div>
            <h1>StarWarsPeople</h1>
            {this.state.people.map(person => <div key={person.id}>{person.name}</div>)}
        </div>
    }
}

