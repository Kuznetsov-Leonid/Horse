import React, { Component } from 'react';
import {Container, CardGroup, Card, Button } from 'react-bootstrap';
import Info from '../Components/info';
import CookieInfo from '../Components/cookieInf';
export default class InfoCookies extends Component{
    render(){
        return(
            <>
                <div className='main'>
                    <Container>
                        <CardGroup>
                            <Card>
                                <CookieInfo/>
                                <hr/>
                                <Info/>
                            </Card>
                        </CardGroup>
                    </Container>
                </div>
            </>
        )
    }
}