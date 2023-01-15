import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (

        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                   <img 
                   src={logo}
                   className='mg-fluid rounded-circle me-3'
                   width='40px'/>
                  Earthly Delights
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav nav">
                    <Nav className="me-auto">
                                               
                    </Nav>
                    <Nav>
                    <Nav.Link href="/shopping">Shopping</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );


};

export default Header;