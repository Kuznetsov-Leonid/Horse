/**
 * Create by Kuznetsov Leonid 
 * 9:00  13.09.2021
 */ 
import React, { Component } from 'react';
import { Container, Card, CardGroup, Row, ListGroup, ListGroupItem, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Google } from 'react-router-dom';
import Maps from '../components/Maps';

import vk from '../img/vk.png';
import insta from '../img/insta.png';
import face from '../img/facebook.png';
import twit from '../img/twitter.png';


export default class Footer extends Component{  
    render() {
        return(
            <>
            
                <Container sticky = "bottom" fluid style = {{
                    'display':'flex',
                    'backgroundColor':'#212529',
                    'color':'white',
                    'width':'100%'
                    }}>
                    <Container style = {{
                        'display':'flex',
                        'JustifyContent':'center',
                        'padding':'10px'
                        }}>
                        <Row>
                        <Card style={{
                            'width': '22rem',
                            'padding':'5px'
                        }}>
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
                        </Row>
                        <Row>
                        <Card style={{'padding':'5px'}}>
                        <Card.Body>
                        <Card.Link href="#">Вакансии</Card.Link> <br />
                        <Card.Link href="#">Политика конфиденциальности</Card.Link> <br />
                        <Card.Link href="#">О сайте</Card.Link>
                        </Card.Body>
                        </Card> 
                        </Row>
                        <Row>
                            <div className="durnMap"><Maps /></div>
                        </Row>
                    </Container>
                </Container>
                
            </>
        );
    }
}
