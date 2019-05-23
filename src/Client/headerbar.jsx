import React from "react";
import { Link, withRouter } from "react-router-dom";

export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={"headerBar"}>
                <Link className="logo-btn-home" to={"/"}>
                    Home
                </Link>
            </div>
        );
    }
}

export default withRouter(HeaderBar);
