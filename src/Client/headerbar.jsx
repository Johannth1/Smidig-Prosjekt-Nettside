import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../Server/img/logo.png';


export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <header className={"headerBar"}>
            <nav className="headerBar_Nav"> 
                <div>
                </div>
            <div className="headerbar_logo">
                <Link className="logo_btn_home" to={"/"}>
                    <img src={logo} alt ="logo"/>
                </Link></div>
                <div className="headerbar_nav_items">
                    <ul>
                    <li><a href=""></a>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    </ul>
                </div>
            </nav>
            </header>
        );
    }
}

export default withRouter(HeaderBar);
