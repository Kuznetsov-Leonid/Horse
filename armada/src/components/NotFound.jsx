/**
 * Create by Kuznetsov Leonid 
 * 30.09.2021
 */ 
import React from 'react';
import { Button, Container, Card, CardGroup } from 'react-bootstrap';
import paje404 from '../img/coweboy.png';

const NotFound = () =>{
    return(
        <Container>
            <CardGroup>
                <Card className="CardLayout" style={{'margin-bottom': '3rem'}}>
                <Card.Img  src={paje404} style={{ width: '20.4rem' }}/>
                </Card>
                <Card Card className="CardLayout" style={{ 
                    'margin': '90px 0px 90px 0px',
                    'text-align':'center',
                    'margin-bottom': '3rem' 
                    }}>
                <Card.Header>
                    <h1> Упс 404 :)</h1>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Увы... Что-то пошло не так.</Card.Title>
                    <Card.Text>
                        Попробуйте начать всё с начала
                    </Card.Text>
                    
                    <Button href="/">На главную</Button>
                </Card.Body>
                </Card>
            </CardGroup>
        </Container>
        
    )
}  

export default NotFound