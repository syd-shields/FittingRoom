import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Heading = () => {
    return (
        <>
            <Navbar bg="custom-pink" variant="light" fluid>
                <Container fluid>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
            <div>
                here is some stuff
            </div>

        </>
    )
}

export default Heading
