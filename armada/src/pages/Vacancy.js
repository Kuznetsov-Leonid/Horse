/**
 * Create by Kuznetsov Leonid 
 * 20:29  25.10.2021
 */ 

import React, {Component} from 'react'
import { 
        Container, 
        Card, 
        ListGroup,
        ListGroupItem, 
        Form, 
        NavDropdown, 
        Modal, 
        Button, 
        Accordion, 
        CardGroup} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import paje404 from '../img/coweboy.png';

export default class Vacancy extends Component{
    render(){
        return(
            <>
                <Container>
                <CardGroup style={{'font-family': '"Roboto Condensed"','letter-spacing': '1px'}}>
                <Card className="CardLayout" style={{'margin-bottom': '3rem'}}>
                <Card.Img  src={paje404} style={{ width: '20.4rem' }}/>
                </Card>
                <Card Card className="CardLayout" style={{ 
                    'margin': '90px 0px 90px 0px',
                    'text-align':'center',
                    'margin-bottom': '3rem' 
                    }}>
                <Card.Header>
                    <h1>Вакансии</h1>
                </Card.Header>
                <Card.Body>
                    <Card.Title>На текущий момент вакансии отсутсвуют.</Card.Title>
                    <Card.Text>
                        Вы можете оставить заявку и прикрепить ссылку на своё резюме,
                        когда появится свободная вакансия мы обязательно с Вами свяжемся.
                    </Card.Text>
                    <Button href="/">На главную</Button>
                </Card.Body>
                </Card>
                </CardGroup>
                </Container>
            </>
        )
    }
}