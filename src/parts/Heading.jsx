import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Heading = () => {
    return (
        <div>
            <Navbar bg="custom-pink" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
            <div class="header">
                <h1>Outfit fitter</h1>
                <p>Virtually wear outfits with the click of a button</p>
            </div>


        </div>
    )
}

export default Heading
