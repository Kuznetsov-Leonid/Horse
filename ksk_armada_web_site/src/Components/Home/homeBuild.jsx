/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 * 
 * Последнее обновление 17.03.2022
 */
import React, { useState } from 'react';
import { Button, Container, Modal, CardGroup, Card, Carousel, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


//Metrics
import { pingBtn } from '../../Utils/metrics';

const Styles = styled.div `
    
`;

const Obj = {
    btnKM : <Button  variant="secondary">Узнать больше</Button>
}

const HomeBuild = () =>{
    
    return (
        <>
        <Container>
            <CardGroup>
                <Card style = {{'background': 'transparent', 'border': 'none'}}>
                    
                </Card>
            </CardGroup>
        </Container>
        </>
    )
}

export default HomeBuild

