import React from "react"
import { Link } from "react-router-dom"
import home from "../Server/img/home.jpg"
import Button from 'react-bootstrap/Button';


let backgroundStyle = {
    backgroundImage: `url(${home})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <section id="homePage" style={backgroundStyle}>
                <div id="homePage-container">
                    <div className="demo-btn">
                        <Link to={"/game"}>
                            <Button variant="primary" size="lg">
                                Play Demo
                                </Button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }






}

export default Home;