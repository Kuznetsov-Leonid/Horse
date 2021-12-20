/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 */
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Form, NavDropdown, Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

//Routing
import Home from "../Pajes/Home";
import Services from "../Pajes/Services";
import AboutUs from "../Pajes/AboutUs";
import Contacts from "../Pajes/Contacts";
import NotFound from "../Pajes/NotFound";

const Header = () =>{
    // //Скрипты модального окна
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Router>
                <Navbar sticky = "top" collapseOnSelect className='headerBG' expand="lg">
                    <Container>
                        <Navbar.Brand style = {{'color':'white'}} href="/">КСК АРМАДА</Navbar.Brand>
                        <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                        <Navbar.Collapse id = "responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link><NavLink to="/" className = "linkColor">Главная</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/services" className = "linkColor">Услуги</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/aboutUs" className = "linkColor">О нас</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/contacts" className = "linkColor">Сонтакты</NavLink></Nav.Link>
                        </Nav>
                        <Button variant="outline-dark" className = "mr-2 Get-con">Заказать звонок</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path ="/" element={<Home/>} />
                    <Route exact path ="/services" element={<Services/>} />
                    <Route exact path ="/aboutUs" element={<AboutUs/>} />
                    <Route exact path ="/contacts" element={<Contacts/>} />
                    <Route exact path="*" element={<NotFound/>} />
                </Routes>
            </Router>
        </>
    )
}

export default Header
