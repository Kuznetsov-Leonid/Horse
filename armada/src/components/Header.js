/**
 * Create by Kuznetsov Leonid 
 * 23:04  2.09.2021
 */ 

import React, { Component } from 'react';
import { Button, Container, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap';
import logo from '../img/stick-man-riding-on-a-horse.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import Sports from '../pages/Sports';
import Service1 from '../pages/Service1';
import Service2 from '../pages/Service2';
import Service3 from '../pages/Service3';
import Service4 from '../pages/Service4';

export default class Header extends Component{
    render() {
        return(
            <>
            <Navbar sticky = "top" collapseOnSelect expand = "lg" bg = "primary" variant = "light" >
                <Container>
                    <Navbar.Brand href = "/">
                        <img 
                            src = {logo}
                            height = "37"
                            width = "40"
                            className = "d-inline-block align-top"
                            alt = "Logo"
                        />{' KSK Armada'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                    <Navbar.Collapse id = "responsive-navbar-nav" >
                        <Nav className = "me-auto" >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                        <Nav.Link href="/sports">Sports</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <NavDropdown title="Service" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/service1">Service1</NavDropdown.Item>
                            <NavDropdown.Item href="/service2">Service2 </NavDropdown.Item>
                            <NavDropdown.Item href="/service3">Service3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/service4">Service4</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form>
                            <Button variante = "outline-info">Teke order</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path ="/" component = {Home} />
                    <Route exact path ="/about" component = {About} />
                    <Route exact path ="/sports" component = {Sports} />
                    <Route exact path ="/gallery" component = {Gallery} />
                    <Route exact path ="/service1" component = {Service1} />
                    <Route exact path ="/service2" component = {Service2} />
                    <Route exact path ="/service3" component = {Service3} />
                    <Route exact path ="/service4" component = {Service4} />
                </Switch>
            </Router>
            </>
        );
    }
}