import React from 'react';
// import "./components/Redux.js";
import Mouse from "./Mouse/Mouse";
// import Mouse from "../src/Mouse/Mouse";
// import ReactDOM from "react-dom";
// import './App.css';
// import StarWarsPeople from './components/StarWarsPeople'
// import Beer from './components/Beer'
// import Gallery from "./components/gallary_js/Gallery";
// import Move from "./components/Move";
// import Clock from "./components/gallary_js/Clock";
// import Index from "./components/Index/Todos";

class App extends React.Component {

    render() {
        return (
            <ul>
                {/*<Beer/>*/}
                {/*<StarWarsPeople/>*/}
                {/*<Gallery
                videos={[
                'https://i.imgur.com/0ziBKZw.mp4',
                'https://i.imgur.com/YG5X1PE.mp4'
                ]}/>*/}
                {/*<Move />*/}
                {/*<Clock />*/}
                {/*{<Index />}*/}
                <Mouse/>

            </ul>
        )
    }
}


export default App;
