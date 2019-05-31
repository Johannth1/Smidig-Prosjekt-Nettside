import React from "react";
import { Link } from "react-router-dom";
import edvard from '../Server/img/edvard.jpg';
import Button from 'react-bootstrap/Button';

const buttonStyle = {
        position: 'fixed',
        left: '50%',
        bottom: '5%',
}



const homepageStyle = {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url(edvard.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center'
}

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }

   


    render() {
        return (
                <div style={homepageStyle} id="homePage-container">
                    <div style={buttonStyle} className="demo-btn">
                        <Link to={"/game"}>
                            <Button variant="primary" size="lg" style={{ marginLeft: "-50%"}}>
                                Start Demo
                                </Button>
                        </Link>
                    </div>
                </div>
        )
    }






}

export default Home;