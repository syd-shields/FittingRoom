import React from 'react'
import Heading from '../components/Heading'
import Register from '../components/Register'
import Container from 'react-bootstrap/Container';

const LandingPage = () => {
    return (
        <Container className="bg-primary" fluid>
            <Heading className="vh-100 bg-primary" />
            <Register className="vh-100" />
        </Container>
    )
}

export default LandingPage
