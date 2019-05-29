import React from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
                <div id="homePage-container">
                    <div className="demo-btn">
                        <Link to={"/game"}>
                            <Button variant="primary" size="lg">
                                Play Demo
                                </Button>
                        </Link>
                    </div>
                </div>
        )
    }






}

export default Home;