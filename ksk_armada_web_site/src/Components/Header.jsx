/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 */
import React from 'react';

import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import Foouter from './Foouter';

//Routing
import Home from "../Pajes/Home";
import Services from "../Pajes/Services";
import AboutUs from "../Pajes/AboutUs";
import Contacts from "../Pajes/Contacts";
import NotFound from "../Pajes/NotFound";

//Email ksk-armada@yahoo.com

const Header = () =>{

    return (
        <>
            <BrowserRouter forceRefresh={true} basename="/">
                <Navbar sticky = "top" collapseOnSelect className='headerBG' expand="lg">
                    <Container>
                        <Navbar.Brand style = {{'color':'white'}} href="/">КСК АРМАДА</Navbar.Brand>
                        <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                        <Navbar.Collapse id = "responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link><NavLink to="/" className = "linkColor">Главная</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/services" className = "linkColor">Услуги</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/aboutUs" className = "linkColor">О нас</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/contacts" className = "linkColor">Контакты</NavLink></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="outline-dark" className = "mr-2 Get-con" href="https://dikidi.net/#widget=70567">Онлайн запись</Button>
                        </Nav>
                            
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
                <Foouter/>
            </BrowserRouter>
        </>
    )
}

export default Header
