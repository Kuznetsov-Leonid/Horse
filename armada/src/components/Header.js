import React, { Component } from 'react'
import { Button, Container, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap'
import logo from '../img/stick-man-riding-on-a-horse.png'

export default class Header extends Component{
    render() {
        return(
            <>
            <Navbar fixed = "top" collapseOnSelect expand = "lg" bg = "primary" variant = "light" >
                <Container>
                    <Navbar.Brand href = "#Home">
                        <img 
                            src = {logo}
                            height = "40"
                            width = "40"
                            className = "d-inline-block align-top"
                            alt = "Logo"
                        />{' '}
                        KSK Armada
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                    <Navbar.Collapse id = "responsive-navbar-nav" >
                        <Nav className = "me-auto" >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About us">About us</Nav.Link>
                        <Nav.Link href="#Sports">Sports</Nav.Link>
                        <Nav.Link href="#Gallery">Gallery</Nav.Link>
                        <NavDropdown title="Service" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Service1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Service2 </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Service3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Service4</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form>
                            <Button variante = "outline-info">Teke order</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }
}