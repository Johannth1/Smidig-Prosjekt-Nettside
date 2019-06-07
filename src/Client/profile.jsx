import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import edvard from '../Server/img/edvard_helfigur.jpg'



const titleStyle = {
    textAlign: 'center',
}



export class Profile extends React.Component {
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
            <React.Fragment>
                <div id="upper" style={titleStyle}>
                    <h2>Jeg er en livredder</h2>
                </div>
                <div id="lower" style={titleStyle}>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs>
                               <Row className="justify-content-md-center"> <h2>Om meg</h2></Row>
                               <Row className="justify-content-md-center"> <h4>Om meg</h4></Row>
                               <Row className="justify-content-md-center"> <h4>Om meg</h4></Row>
                                </Col>
                            <Col xs><Image src={edvard} roundedCircle fluid /></Col>
                            <Col xs>
                               <Row className="justify-content-md-center"> <h2>Detaljer</h2></Row>
                               <Row className="justify-content-md-center"> <h4>Om meg</h4></Row>
                               <Row className="justify-content-md-center"> <h4>Om meg</h4></Row>
                            
                            </Col>
                        </Row>
                    </Container>
                </div>

            </React.Fragment>
        )
    }

}



export default Profile