import React, { useContext } from 'react';
import { SkillContext } from './skill-context';

import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import AllResumes from './AllResumes';

import './Landing.css';

const Landing = () => {
    const skillContext = useContext(SkillContext);
    const handleInput = (e) => {
        skillContext.searched(e.target.value);
    }
    return (
        <Container className="container-div">
            <Row>
                <Col sm={true} className="sidediv">
                    Filters
                </Col>
                <Col sm={true}>
                    <SearchBar handleInput={handleInput} />
                    <AllResumes />
                </Col>
            </Row>
        </Container>
    )
}

export default Landing;