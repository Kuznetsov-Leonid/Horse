/**
 * Create by Kuznetsov Leonid 
 * 24.12.2021
 */
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Form, NavDropdown, Modal, CardGroup, Card } from 'react-bootstrap';
import Iframe from './iframe';
import Massege from './massege.png';
import Phone from './phone.png';
import Point from './point.png';
import Youtube from './You.png';
import Telegram from './Tel.png';
import Instagram from './Inst.png';
import Vk from './Vk.png';
import Chess from './chess.png';

const ContactsBuild = () =>{
    
    return (
        <>
            <Container>
                <CardGroup style={{'marginTop':'50px'}}>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <h1>Наши контакты</h1>
                        <p><img className='mes' src={Massege} alt="." />&nbsp;hello@createx.com</p>
                        <p><img className='ph' src={Phone} alt="." />&nbsp;+7 (967) 017-9963</p>
                        <p><img className='poi' src={Point} alt="." />&nbsp;Новорязанское шоссе, дер. Дурниха Раменского района владение 79, 25&nbsp;км от&nbsp;МКАД.</p>
                        <br/>
                        <h3>Мы в соцсетях</h3>
                        <div>
                            <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link You" src={Youtube} alt="." /></Button>
                            <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link Tel" src={Telegram} alt="." /></Button>
                            <Button className = "pg-0" variant="link" href="https://www.instagram.com/ksk_armada/" target='_blank'><img className = "img-button-link Inst" src={Instagram} alt="." /></Button>
                            <Button className = "pg-0" variant="link" href="https://vk.com/ksk_armada" target='_blank'><img className = "img-button-link Vk" src={Vk} alt="." /></Button>
                        </div>
                    </Card>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <div className="mapStyle">
                            <Iframe/>
                        </div>
                    </Card>
                </CardGroup>
                <CardGroup style={{'marginTop':'80px'}}>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <img src={Chess} alt="." />
                    </Card>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <h6>Остались вопросы?</h6>
                        <h1>Напишите нам</h1>
                        <Form>
                            <CardGroup>
                                <Card style = {{'background': 'transparent', 'border': 'none', 'marginRight':'5px'}}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Имя*</Form.Label>
                                        <Form.Control type="name" placeholder="Ваше имя" />
                                        <br/>
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control type="email" placeholder="Ваш email" />
                                    </Form.Group>
                                </Card>
                                <Card style = {{'background': 'transparent', 'border': 'none', 'marginLeft':'5px'}}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Фамилия</Form.Label>
                                        <Form.Control type="name" placeholder="Ваша фамилия" />
                                        <br/>
                                        <Form.Label>Номер телефона</Form.Label>
                                        <Form.Control type="phone" placeholder="Ваш номер телефона" />
                                    </Form.Group>
                                </Card>
                            </CardGroup>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Сообщение</Form.Label>
                                <Form.Control placeholder="Ваше сообщение" as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Я согласен получать сообщения от КСК Армада" />
                            </Form.Group>
                            <br />
                            <Button variant="outline-dark" className = "mr-2 Get-con">Отправить</Button>
                        </Form>
                    </Card>
                </CardGroup>
            </Container>
        </>
    )
}

export default ContactsBuild
