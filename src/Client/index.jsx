import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./home"
import Game from "./game"
import HeaderBar from "./headerbar"
import Placeholder from "./placeholder"

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    notFound() {
        return (
            <div>
                <h2>NOT FOUND: 404</h2>
                <p>
                    ERROR: This is not the page you are looking for.
                </p>
            </div>
        );
    };


    render() {


        return (
            <BrowserRouter>
                <div>
                    <HeaderBar/>
                    <Switch>
                        <Route exact path="/game"
                            render={props => <Game {...props} />} />
                        <Route exact path="/info"
                            render={props => <Placeholder {...props} />} />
                        <Route exact path="/skole"
                            render={props => <Placeholder {...props} />} />
                        <Route exact path="/episoder"
                            render={props => <Placeholder {...props} />} />
                        <Route exact path="/"
                            render={props => <Home {...props} />} />
                        <Route component={this.notFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
