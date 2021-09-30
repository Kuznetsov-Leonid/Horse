/**
 * Create by Kuznetsov Leonid 
 * 11:00  13.09.2021
 */ 

import React, { Component } from 'react';
import { Container, Card, ListGroup, ListGroupItem, Form, NavDropdown, Modal, Button, Accordion, CardGroup} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import photo1 from '../img/chess.png'
import armadaLogo from '../img/armadaLogo.png';
import Slider from '../components/Slider'



export default class Home extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            showModal: false
        };
    
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    
    close() {
        this.setState({ showModal: false });
    }
    
    open() {
        console.log('open');
        this.setState({ showModal: true });
    }
    render() {
        return (
                <>
                <Container>
                <CardGroup>
                    <Card style={{ 'width': '24rem','border':'none' }}>                                    
                        <Card.Img variant="top"  
                        style={{'width': '22rem',
                        'display': 'block',
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                        }} 
                        src={armadaLogo} />
                        <Card.Body>
                            <Card.Text  style={{'text-align':'center'}}>
                                <h5>Конно спортивный клуб</h5>
                                <h1>АРМАДА</h1>
                                <h3>"Поэзия в движении"</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Slider/>
                    </Card>
                    <Card style={{ 'width': '24rem','border':'none' }}>                                    
                        <Card.Img variant="top"  
                        style={{'width': '17rem',
                        'display': 'block',
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                        }}  
                        src={photo1} />
                        <Card.Body>
                            <Card.Title style={{'text-align': 'center'}}>Важные новости!</Card.Title>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>Ведётся набор участников на соревнования</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    <Button variant="warning" className = "mr-2" onClick = {this.open}>Оставить заявку на участие</Button>{' '}
                                </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>Вакцинация против бешенства</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    <Button variant="warning" className = "mr-2" onClick = {this.open}>Оставить заявку на вакцинацию</Button>{' '}
                                </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                <Accordion.Header>Завоз овса на 20.09.21</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>
                        <Card.Body/>
                            <Card.Text style={{'text-align':'center'}}>
                            <Card.Link href="#">Карантин</Card.Link>
                            <Card.Link href="#">Вакцинация</Card.Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                    </Container>



                    <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Обратная связь</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Имя *</Form.Label>
                        <Form.Control type="Name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Электронная почта *</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Номер телефона</Form.Label>
                        <Form.Control type="phone" placeholder="+7999 999 99 99" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Сообщение *</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Согласие на обработку персональных данных *" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Отправить
                    </Button>
                    </Form>
                </Modal.Body>
            </Modal>
                </>
        )
    }
}