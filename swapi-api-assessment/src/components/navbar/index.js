import React from "react";
import {Navbar,Container, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Topbar = () => {
    return (
        <div id="navbar">
            <Navbar bg="black" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" style={{fontSize:"40px"}}>Star Wars</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/films">Films</Nav.Link>
                            <Nav.Link as={NavLink} to="/characters">Characters</Nav.Link>
                            <Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar;