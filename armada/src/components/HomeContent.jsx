/**
 * Create by Kuznetsov Leonid 
 * 1.10.2021
 */ 
    import React, { useState, useEffect } from 'react';
    import { Container, Card, Form, Button, Accordion, CardGroup } from 'react-bootstrap';
    import Modal from 'react-bootstrap/Modal';
    import photo1 from '../img/chess.png';
    import armadaLogo from '../img/armadaLogo.png';
    import Slider from './Slider';
    import Loading from './Loadin';

    const HomeContent = () =>{
            //Скрипты модального окна
            const [show, setShow] = useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

            //Скрипт спиннер лоудера
            const [isLoading, setIsLoading] = useState(true);
            useEffect (() =>{
                setTimeout(() =>{
                setIsLoading(false);
                }, 500)
            })
        return (
            <>
            <Container>
                <CardGroup>
                <Card className="CardLayout" style={{'margin-bottom': '3rem'}}>                                    
                        <Card.Img variant="top"  
                        style={{
                        'width': '16rem',
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
                    <Card className="CardLayout" style={{'margin-bottom': '3rem'}}>
                        <Card.Body style={{
                        'display': 'block',
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                        }}  >
                            {isLoading==true?<Loading/>:<Slider/>}
                        </Card.Body>
                    </Card>
                    <Card className="CardLayout" style={{'margin-bottom': '3rem'}}>                                    
                        <Card.Img variant="top"  
                        style={{
                        'width': '16rem',
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
                                    <Button variant="warning" className = "mr-2" onClick={handleShow}>Оставить заявку на участие</Button>{' '}
                                </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                <Accordion.Header>Вакцинация против бешенства</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    <Button variant="warning" className = "mr-2" onClick={handleShow}>Оставить заявку на вакцинацию</Button>{' '}
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
            <Modal show={show} onHide={handleClose} animation={false}>
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                <Button variant="primary" type="submit" onClick={handleClose}>Отправить</Button>
            </Modal.Footer>
            </Modal>
            </>
        )
    }

export default HomeContent
