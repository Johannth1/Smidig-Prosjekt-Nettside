import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import edvard from '../Server/img/edvard_helfigur.jpg'
import Button from 'react-bootstrap/Button';

const profileContainerStyle = {
    width: '100vw',
    height: '60vh',
    paddingTop: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: 'lightgrey',
    fontSize: '1rem'

}

// Centers text
const textStyle = {
    textAlign: 'center',
}


// CSS for bilde som vises for
const profilePictureStyle = {
    height: '45vh',

}

export class ProfileCard extends React.Component {
    constructor(props) {
        super(props)
    }

    /* 
        #TODO
        Does not scale properly on small displays // Maybe use media query and change structure on smaller widths
        Fill in proper text and picture. 
        Add some flare / styling
    
    */

    render() {
        return (
            <div style={profileContainerStyle}>
                <div style={textStyle}>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs>
                                <Row className="justify-content-md-center"> <h3>Opprinnelse?</h3> </Row>
                                <Row className="justify-content-md-center"> <p>Sønn av en norsk dommer i den dansk-norske kolonien St. Croix i Karibia og en slavekvinne</p></Row>
                                <Row className="justify-content-md-center"> <h3>Kort om meg</h3></Row>
                                <Row className="justify-content-md-center"> <p>10 år gammel ankom eg alene til Oslo etter et dramatisk forlis i Oslofjorden</p></Row>
                                <Row className="justify-content-md-center"> <p>Her bodde eg fra eg var 10 til 22 år hos min tante, Fru Bull</p></Row>
                                <Row className="justify-content-md-center"> <p>Gikk i snekkerlære og ble etter hvert snekkermester på Bærums verk</p></Row>
                            </Col>
                            <Col xs>
                                <Image src={edvard} roundedCircle fluid style={profilePictureStyle} alt="Helfigurbilde av Edvard" />
                                <Row><p>{"\n"}</p></Row> {/*Creates some whitespace for the image*/}
                                <Button variant="primary" size="sm" href="/info">Lær mer</Button>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        )
    }

}



export default ProfileCard