/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 */
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Form, NavDropdown, Modal, CardGroup, Card, Carousel } from 'react-bootstrap';
import Logo from './logogtype.jpg';


const HomeBuild = () =>{
    
    return (
        <>
            <div className='home-bg'>
                <Container>
                    <CardGroup>
                        <Card style = {{'background': 'transparent', 'border': 'none'}}>
                            <img className='imgLogo' src={Logo} alt="." />
                            <div className='btn-pj'>
                                <Button variant="outline-dark" 
                                style = {{
                                    'border':'solid #F75E05 1px',
                                    'color':'#F75E05',
                                    'width': '124px'
                                }}>
                                    О нас</Button>
                                <Button variant="outline-dark" className='Services'
                                style = {{'width': '124px'}}
                                >Услуги</Button>
                            </div>
                        </Card>
                        <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=f5f5f5"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=eee"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default HomeBuild
