/**
 * Create by Kuznetsov Leonid 
 * 1.10.2021
 */ 
    import React from 'react';
    import { Container, Card, CardGroup, Row, ListGroup, ListGroupItem, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
    import { BrowserRouter as Router, Switch, Route, Link, Google } from 'react-router-dom';
    import Maps from '../components/Maps';
    import vk from '../img/vk.png';
    import insta from '../img/insta.png';
    import face from '../img/facebook.png';
    import twit from '../img/twitter.png';
    const Footer = () =>{
        return (
            <>
                <Container sticky = "bottom" fluid style = {{'backgroundColor':'#212529'}}>
                    <CardGroup>
                        <Card className="CardLayout" style={{'margin-bottom': '1rem'}}>
                        <ListGroup className="list-group-flush">
                        <ListGroupItem style={{
                                'display': 'block',
                                'margin-left': 'auto',
                                'margin-right': 'auto'
                                }}><h3>Мы в соц сетях</h3>
                                </ListGroupItem>
                        <ListGroupItem className = "social">
                            <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                <ButtonGroup className="me-2" aria-label="First group">
                                <Button href="https://vk.com/ksk_armada" target="_blank" variant="secondary">
                                    <img src={vk} alt="none"/>
                                    </Button>{' '}
                                <Button 
                                href="https://instagram.com/ksk_armada?utm_medium=copy_link" 
                                target="_blank" 
                                variant="secondary">
                                    <img src={insta} alt="none"/>
                                    </Button>{' '}
                                <Button href="#" target="_blank" variant="secondary">
                                    <img src={face} alt="none"/>
                                    </Button>{' '}
                                <Button href="#" target="_blank" variant="secondary">
                                    <img src={twit} alt="none"/>
                                    </Button>
                                </ButtonGroup>
                                </ButtonToolbar>
                        </ListGroupItem>
                        <ListGroupItem style={{
                                'display': 'block',
                                'margin-left': 'auto',
                                'margin-right': 'auto'
                                }}> <h2>Телефон:</h2>
                                    <h3>+7 (967) 017-99-63</h3></ListGroupItem>
                        </ListGroup>
                        <Card.Body style={{
                                'display': 'block',
                                'margin-left': 'auto',
                                'margin-right': 'auto'
                                }}>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>
                        <Card className="CardLayout" style={{'margin-bottom': '1rem'}}>
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <Card.Link  href="#">Вакансии</Card.Link> <br />
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Card.Link  href="#">Политика конфиденциальности</Card.Link> <br />
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Card.Link  href="#">О сайте</Card.Link> <br />
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Card.Link  target="_blank" href="https://goo.gl/maps/8Dnrjdv5yeGwhYBZ8">
                                    Новорязанское шоссе, дер. Дурниха Раменского района, 25 км от МКАД.
                                    </Card.Link>
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        </Card>
                        <Card className="CardLayout" style={{'margin-bottom': '1rem'}}>
                        <Card.Body>
                            <div className="mapStyle">
                                <p>map</p>
                            </div>
                        </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        )
    }
    
    export default Footer