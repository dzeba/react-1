import React from 'react';
import uuidv4 from 'uuid/v4';
import './beer.css';


export default class Beer extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            beers: []
        };
        fetch('https://api.punkapi.com/v2/beers/')
            .then(response => response.json())
            .then(data => {
                const beers = data;
                this.setState({beers})
            })
    }

    render() {
        return <div>

            <h1>Beer</h1>
            <div className='beer__ul'>{this.state.beers.map(beer =>
                <div className='beer__item' key={beer.id}>
                    <div className='beer__name'>{beer.name}</div>
                    <div><img className="img" src={beer.image_url}/></div>
                    <div>{beer.description},</div>
                    {beer.abv}
                    {beer.ingredients.hops.map(h => <div>{h.name}</div>)}
                </div>)}
            </div>
        </div>
    }
}

