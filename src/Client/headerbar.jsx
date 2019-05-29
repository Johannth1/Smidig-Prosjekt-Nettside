import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../Server/img/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link to={"/game"}>
                        <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Tidvis logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://www.tidvis.no/" target="_blank">Om Tidvis</Nav.Link>
                        <Nav.Link href="https://oslohavn1798.no/" target="_blank">Oslo Havn 1798</Nav.Link>
                    </Nav>                   
                </Navbar.Collapse>
            </Navbar >
        );
    }
}

export default withRouter(HeaderBar);
