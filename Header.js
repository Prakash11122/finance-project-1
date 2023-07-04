import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './CustomNavbar.css'; 


const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home">User Login</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                       
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
