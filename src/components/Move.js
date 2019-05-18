import React from "react";
import PropTypes from "prop-types";
import move from 'move-js';

export default class Move extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            move(this.el)
                .to(500, 200)
                .duration("5s")
                .end();
        });
    }
    render() {
        return <div ref={el => (this.el = el)}>{'sdgsdgsd'}</div>;
    }
}