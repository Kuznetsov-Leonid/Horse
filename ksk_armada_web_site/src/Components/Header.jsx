/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 */
import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Route, NavLink, Routes, widthRouter } from 'react-router-dom';
import Foouter from './Foouter';
import Logo from '../img/ArmadaLogoPNG.png';
import styled from 'styled-components';
//Metrics
import { pingBtn } from '../Utils/metrics';

//Routing
import Home from "../Pajes/Home";
import Services from "../Pajes/Services";
import HorseWalks from "../Pajes/HorseWalks";
import RidingTraining from "../Pajes/RidingTraining";
import Ippotherapy from "../Pajes/Ippotherapy";
import HoldUpHorse from "../Pajes/HoldUpHorse";
import PhotoWithHorse from "../Pajes/PhotoHorse";
import AboutUs from "../Pajes/AboutUs";
import Contacts from "../Pajes/Contacts";
import NotFound from "../Pajes/NotFound";
import PoliticsConf from '../Pajes/InfoCookie';

//Email ksk-armada@yahoo.com

const Styles = styled.div`
    .logo{
        width: 100px;
        margin-left: 50px;
    }
`

const Header = () =>{
    return (
        <>
            <BrowserRouter forceRefresh={true} basename="/">
                <Navbar collapseOnSelect className='headerBG' variant="dark" expand="lg" style={{'height':'auto'}}>
                    <Container>
                        {/* <Navbar.Brand style = {{'color':'white'}} href="/">КСК АРМАДА</Navbar.Brand> */}
                        <Styles>
                            <Navbar.Brand href="/">
                                    <img className='logo' src={Logo} alt='ARMADA'/>{' '}
                            </Navbar.Brand>
                        </Styles>
                        <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                        <Navbar.Collapse id = "responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link eventKey={1}><NavLink to="/" className = "linkColor">Главная</NavLink></Nav.Link>
                            {/* <Nav.Link ><NavLink to="/services" className = "linkColor">Услуги</NavLink></Nav.Link> */}
                            <Nav.Link eventKey={2}><NavLink to="/aboutUs" className = "linkColor">О нас</NavLink></Nav.Link>
                            <Nav.Link eventKey={3}><NavLink to="/contacts" className = "linkColor">Контакты</NavLink></Nav.Link>
                            <NavDropdown eventKey={4} className = "dropLinkColor" title="Услуги" id="basic-nav-dropdown">
                                <NavDropdown.Item eventKey={4.1}><NavLink className="dropColor" to="/HorseWalks">Конные прогулки</NavLink></NavDropdown.Item>
                                <NavDropdown.Item eventKey={4.2}><NavLink className="dropColor" to="/RidingTraining">Обучение верховой езде</NavLink></NavDropdown.Item>
                                <NavDropdown.Item eventKey={4.3}><NavLink className="dropColor" to="/HoldUpHorse">Постой лошадей</NavLink></NavDropdown.Item>
                                <NavDropdown.Item eventKey={4.4}><NavLink className="dropColor" to="/PhotoWithHorse">Фотосессии с лошадьми</NavLink></NavDropdown.Item>
                                <NavDropdown.Item eventKey={4.5}><NavLink className="dropColor" to="/Ippotherapy">Иппотерапия</NavLink></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Button
                                variant="outline-dark" 
                                className = "mr-2 Get-con" 
                                href="https://dikidi.net/#widget=70567"
                                onClick={() =>{pingBtn('reachGoal', 'DikidiClick')}}>
                                    Онлайн запись
                            </Button>
                        </Nav>
                            
                        </Navbar.Collapse>
                        
                    </Container>
                </Navbar>   
                <Routes>
                    <Route exact path ="/" element={<Home/>} />
                    <Route exact path ="/HorseWalks" element={<HorseWalks/>} />
                    <Route exact path ="/RidingTraining" element={<RidingTraining/>} />
                    <Route exact path ="/Ippotherapy" element={<Ippotherapy/>} />
                    <Route exact path ="/HoldUpHorse" element={<HoldUpHorse/>} />
                    <Route exact path ="/PhotoWithHorse" element={<PhotoWithHorse/>} />
                    <Route exact path ="/services" element={<Services/>} />
                    <Route exact path ="/aboutUs" element={<AboutUs/>} />
                    <Route exact path ="/contacts" element={<Contacts/>} />
                    <Route exact path="/PoliticsConf" element={<PoliticsConf/>}/>
                    <Route exact path="*" element={<NotFound/>} />
                </Routes>
                <Foouter/>
            </BrowserRouter>
        </>
    )
}

export default Header
