import React from "react";
import PropTypes from "prop-types";

export default class Clock extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {date: new Date()}
    }
    componentDidMount() {
       this.timer = setInterval(() => {
            this.setState({date: new Date()});
    },1000)
    }
    componentWillAnmount(){
        clearInterval(this.timer);
    }
    render(){
        return <div>
            {this.state.date.toString()}
        </div>
    }
}