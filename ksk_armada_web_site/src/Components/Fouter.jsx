/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 */
import React, { useState } from 'react';
import { Container, CardGroup, Card, Button, Form } from 'react-bootstrap';
import Youtube from '../img/Subtract.png';
import Facebook from '../img/Vector-0.png';
import Twitter from '../img/Vector-1.png';
import Telegram from '../img/Vector-2.png';
import Instagram from '../img/Vector-3.png';
import In from '../img/Vector-4.png';
import Mail from '../img/Mail.png';
import Phone from '../img/Phone.png';
import Equestrian from '../img/equestrian.png';




const Fouter = () =>{
    
    return (
        <>
            <div className = "Background-color-fouter">
                <Container style = {{'padding': '20px 0px 10px 0px'}}>
                    <CardGroup>
                        <Card style = {{'background': 'transparent', 'border': 'none'}}>
                            <h6 className = "Title-card">МЫ В СОЦСЕТЯХ</h6>
                            <div>
                                <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link You" src={Youtube} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="#"><img className = "img-button-link Tel" src={Telegram} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="https://www.instagram.com/ksk_armada/" target='_blank'><img className = "img-button-link Inst" src={Instagram} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="https://vk.com/ksk_armada" target='_blank'><img className = "img-button-link In" src={In} alt="." /></Button>
                            </div>
                        </Card>
                        <Card style = {{'background': 'transparent', 'border': 'none'}}>
                            <h6 className = "Title-card-2">НАШИ КОНТАКТЫ</h6>
                            <p className = "Card-three-txt"><img className = "Ph-1" src={Phone} alt="." />(405) 555-0128</p>
                            <p className = "Card-three-txt"><img className = "Ma-1" src={Mail} alt="." />hello@createx.com</p>
                        </Card>
                        <Card style = {{'background': 'transparent', 'border': 'none'}}>
                                <h6 className = "Title-card-2">КАРТА САЙТА</h6>
                                <a className = "button-link-card" href="/">Гавная</a>
                                <a className = "button-link-card" id="mt15" href="/services">Услуги</a>
                                <a className = "button-link-card" id="mt15" href="/aboutUs">О нас</a>
                                <a className = "button-link-card" id="mt15" href="/contacts">Контакты</a>
                        </Card>
                        <Card style = {{'background': 'transparent', 'border': 'none'}}>
                            <h6 className = "Title-card-2">Подпишитесь на наши новости</h6>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control style={{
                                        'background': 'rgba(255, 255, 255, 0.12)',
                                        'border': '1px solid rgba(255, 255, 255, 0.2)',
                                        'color':'white'
                                    }} 
                                    type="email" placeholder="Email address" />
                                    <br />
                                    <Button type="submit">Подписаться</Button>
                                </Form.Group>
                            </Form>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
            <div className = "Background-color-sub-fouter">
                <CardGroup style = {{'textAlign':'center'}}>
                    <Card style = {{'background': 'transparent', 'border': 'none', 'height': '15px'}} >
                            <p className = "fouter-copir-txt">
                            &copy;&ensp; All rights reserved. Made with by Orlan. E.S.C. ARMADA
                            <img src={Equestrian} alt="." id = "Equestrian"/>
                            </p>
                    </Card>
                </CardGroup>
            </div>   
        </> 
    )
}

export default Fouter
{/*  */}