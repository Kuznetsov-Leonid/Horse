import React from "react";
import styled from 'styled-components';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

import imgWidthHorse1 from './imgSrcPhotoWithHorse/imgWidthHorse1.jpg';
import imgWidthHorse2 from './imgSrcPhotoWithHorse/imgWidthHorse2.jpg';
import imgWidthHorse3 from './imgSrcPhotoWithHorse/imgWidthHorse3.jpg';
import imgWidthHorse4 from './imgSrcPhotoWithHorse/imgWidthHorse4.jpg';

const Styles = styled.div `

    .imgSmall{
        width: 100%;
    }
    .contentMargin{
        margin: 50px;
    }

`;

const ContentHorseRide = () => {
    return(
        <>
        </>
    );
}

const ContentHoldUpWithHorse = () => {
    return(
        <>
        </>
    );
}

const ContentHippotherapy = () => {
    return(
        <>
        </>
    );
}

const ContentEducationHorseRide = () => {
    return(
        <>
        </>
    );
}



//Фотосессии с лошадьми
const ContentPhotoWithHorse = () => {
    return(
        <>
            <Styles>
                <div className="contentMargin">
                    <Container>
                        <Row>
                                <h2>Дорогие друзья!</h2>
                                <h5>
                                    Для того чтобы Ваша фотосессиия прошла самым наилучшим образом,
                                    все условия проведения необходимо обговорить заранее 
                                    (образ, количество участников, локации и&nbsp;время).
                                </h5>
                                <hr />
                                <h6>Фотосессии проводятся по предварительной записи.</h6>
                                <h6>Арнеда лошади от 2000р. / 1 час</h6>
                                <h6>Все фотосессии проходят в сопровождении треннера.</h6> 
                        </Row>
                        
                    </Container>
                </div>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img className="imgSmall" src={imgWidthHorse3} alt="ksk armada" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="imgSmall" src={imgWidthHorse2} alt="ksk armada" />
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <br />
            </Styles>
        </>
    );
}

export{
    ContentHorseRide,
    ContentHoldUpWithHorse,
    ContentHippotherapy,
    ContentEducationHorseRide,
    ContentPhotoWithHorse
};