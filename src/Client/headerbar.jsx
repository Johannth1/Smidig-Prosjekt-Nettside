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
            <Navbar collapseOnSelect expand="lg" bg="secondary" fixed="top" style={{ borderBottom: "2px solid black"}}> 
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            src={logo}
                            width="45"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Tidvis logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-start" style={{ width: "100%" }} as="ul">
                    <Nav.Item as="li">
                            <Nav.Link style={{ fontSize: "1.3rem" }} href={"/episoder"}>Episoder</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link style={{ fontSize: "1.3rem" }} href={"/info"}>Informasjon</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link style={{ fontSize: "1.3rem" }} href={"/skole"}>Skoleside</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Nav className="justify-content-end" style={{ width: "100%" }} as="ul">
                      
                        <Nav.Item as="li">
                            <Nav.Link href="https://www.tidvis.no/" target="_blank" style={{ fontSize: "1.3rem" }}>Om Tidvis</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="https://oslohavn1798.no/" target="_blank" style={{ fontSize: "1.3rem" }}>Oslo Havn 1798</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
    }
}

export default withRouter(HeaderBar);
