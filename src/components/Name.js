import React from 'react';
import ReactDOM from "react-dom";


class Name extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            arr: [{name: 'petor'}, {name: 'vasya'}, {name: 'vova'}, {name: 'misha'}, {name: 'petro'}],
        }
    }

    render() {
        return (
            <ul>
                {this.state.arr.map((number) =>
                    <li>{number.name}</li>
                )}
            </ul>
        )
    }
}


export default Name;
