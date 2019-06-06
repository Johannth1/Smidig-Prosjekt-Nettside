import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const navbarStyle = {

}

export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="link-3" >Link </Nav.Link>
            </Nav>
        );
    }
}

export default withRouter(HeaderBar);
