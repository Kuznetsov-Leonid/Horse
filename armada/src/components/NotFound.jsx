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
                <Card style={{ border:'none' }}>
                <Card.Img  src={paje404} style={{ width: '25rem' }}/>
                </Card>
                <Card Card style={{ border:'none', margin: '90px 0px 90px 0px', 'text-align':'center' }}>
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