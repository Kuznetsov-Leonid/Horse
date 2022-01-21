/**
 * Create by Kuznetsov Leonid 
 * 24.12.2021
 */
import React from 'react';
import { Button, Container, CardGroup, Card } from 'react-bootstrap';
import CowBoy from './cowboy.png';

const notFoundBuild = () =>{
    return (
        <>
            <Container>
                <CardGroup>
                    <Card style = {{'background': 'transparent', 'border': 'none', 'margin':'20px'}}>
                        <img src={CowBoy} alt="." />
                    </Card>
                    <Card style = {{'background': 'transparent', 'border': 'none', 'margin':'20px', 'textAlign':'center'}}>
                        <div>
                            <h2>404&nbsp;СТРАНИЦА НЕ&nbsp;НАЙДЕНА</h2>
                            <br/>
                            <h3>Увы... Что-то пошло не&nbsp;так.</h3>
                            <br/>
                            <h5>попробуй начать всё сначала</h5>
                            <br/>
                            <div><Button variant="outline-dark" className = "mr-2 Get-con" href='/'>НА ГЛАВНУЮ</Button></div>
                        </div>
                    </Card>
                </CardGroup>
            </Container>
        </>
    )
}

export default notFoundBuild
