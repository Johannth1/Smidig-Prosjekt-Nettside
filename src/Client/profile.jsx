import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


const titleStyle = {
    textAlign: 'center',
    fontSize: '1rem'
}

const undertitleStyle = {

}


export class Profile extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <React.Fragment id="profilePage">
                <div id="upper" style={titleStyle}>
                    <h1>Edvard Sils</h1>
                    <h2>Jeg er en livredder</h2>
                </div>
                <div id="lower">
                    <Container>
                        <Row>
                            <Col sm>Om meg</Col>
                            <Col sm><Image src="edvard.jpg/171x180" roundedCircle /></Col>
                            <Col sm>Detaljer</Col>
                        </Row>
                    </Container>
                </div>

            </React.Fragment>
        )
    }

}



export default Profile