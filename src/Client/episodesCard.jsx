import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import edvard from '../Server/img/edvard_helfigur.jpg'
import Button from 'react-bootstrap/Button';

const episodesContainerStyle = {
    width: '100vw',
    height: '60vh',
    paddingTop: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: 'grey'
}

// CSS for bilde som vises for
const episodesPictureStyle = {
    height: '175px',
    width: '175px',

}

export class EpisodesCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div style={episodesContainerStyle}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs>
                            <Row className="justify-content-md-center" > <h2>Episode 1</h2> </Row>
                            <Row className="justify-content-md-center" > <p>I første episode møter vi vår helt Edvard ute på et ærend for familien. Han skal på fisketorget og kjøpe en fisk til middagen, men får snart andre ting å tenke på.</p></Row>
                            <Row className="justify-content-md-center" > <Button variant="primary" size="sm" >Start Episoden</Button>
                            <Image src={edvard} thumbnail style={episodesPictureStyle} alt="Helfigurbilde av Edvard" /> </Row>
                        </Col>
                    </Row>
                </Container>
            </div>


        );
    }
}

export default EpisodesCard;
