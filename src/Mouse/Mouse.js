import React from "react";
import {increase} from "../components/Redux";
import {decrease} from "../components/Redux";
// import styles from './Mouse.module.css';
import store from '.././components/Redux'
export default class Mouse extends React.Component {
    componentDidMount(){
        store.subscribe(()=>this.forceUpdate());
    }
    render(){
        return <div>
            {store.getState().count}
            <button onClick={()=>store.dispatch(increase())}>+1</button>
            <button onClick={()=>store.dispatch(decrease())}>-1</button>
        </div>
    }
}