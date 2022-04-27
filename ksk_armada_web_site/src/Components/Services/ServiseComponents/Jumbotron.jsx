/**
 * Create by Kuznetsov Leonid 
 * 11.04.2021
 */

import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import imgHorse from './imgHorse.jpg';
import imgPrise from './prise.jpg';
import imgWalk from './imgWalk.jpg';
import imgTerapy from './imgTerapy.jpg';
import imgPost from './imgPost.jpg';
import imgPhotoSet from './imgPhotoSet.jpg';
import OnlineEntry from '../../Modal/OnlineEntry';
//Metrics
import { pingBtn } from '../../../Utils/metrics';

//Стили обьектов
const Styles = styled.div `
    .JumboEducationHorseRide {
        background: url(${imgHorse}) no-repeat fixed top;
    }
    .JumboHippotherapy{
        background: url(${imgTerapy}) no-repeat fixed top;  
    }
    .JumboHorseRide{
        background: url(${imgWalk}) no-repeat fixed top;  
    }
    .JumboHoldUpWithHorse{
        background: url(${imgPost}) no-repeat fixed top;  
    }
    .JumboPhotoWithHorse{
        background: url(${imgPhotoSet}) no-repeat fixed top;  
    }
    .condComp{
        background-size: cover;
        color: #efefef;
        height: 700px;
        width: auto;
        position: realetive;
        z-index: -2;
        display: flex;
        align-items: center;
        align-content: center; 
        justify-content: center; 
        overflow: auto;   
    }
    .overlay{
        background: rgba(19, 19, 19, 0.6);
        padding: 10%;
        border-radius: 20px;
        display: block;
    }
`;

//Онлайн заявка
const JumboObj = {
    btn : <OnlineEntry onClick={() =>{pingBtn('reachGoal', 'OnlineEntry')}}/>,
    num : <h4>+7 (967) 017-99-63</h4>
}

//Школа верховой езды
const JumboEducationHorseRide = () => {
    return(
        <>
            <Styles>
                <div fluid className='JumboEducationHorseRide condComp'>
                    <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Обучение верховой езде</h1>
                                <Col>
                                    <h6>
                                    Обучаем с&nbsp;основ до&nbsp;профессионального уровня, 
                                    даже если&nbsp;Вы до&nbsp;этого никогда не&nbsp;были в&nbsp;седле. 
                                    Уроки проходят в&nbsp;группах или индивидуально, а&nbsp;лошадки подбираются 
                                    в&nbsp;соответствии с&nbsp;возрастом, весом и&nbsp;навыками всадника.
                                    </h6>
                                </Col>
                                <Col>
                                    <h4>2500р. Индивидуальное занятие</h4>
                                    <br />
                                    <h4>1500р. Групповое занятие</h4>
                                    <br />
                                    {JumboObj.btn}
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}

//Иппотерапия
const JumboHippotherapy = () => {
    return(
        <>
            <Styles>
                <div fluid className='JumboHippotherapy condComp'>
                <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Иппотерапия</h1>
                                <Col>
                                    <h6>
                                        Иппотерапия&nbsp;&mdash; это лечение различных болезней с&nbsp;помощью верховой езды и&nbsp;общения с&nbsp;лошадьми.
                                    </h6>
                                </Col>
                                <Col>
                                    <h4>2500р. Индивидуальное занятие</h4>
                                    <br />
                                    {JumboObj.btn}
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}

//Прогулки в поле
const JumboHorseRide = () => {
    return(
        <>
            <Styles>
                <div fluid className='JumboHorseRide condComp'>
                <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Конные прогулки</h1>
                                <Col>
                                    <h6>
                                        Наслаждайтесь природой и&nbsp;общением с&nbsp;животными. Лучший выбор для семейного отдыха и&nbsp;встреч с&nbsp;друзьями.
                                    </h6>
                                    <br />
                                    <h4>2500р. Прогулка в&nbsp;поле 1.5 часа</h4>
                                    <br />
                                    {JumboObj.btn}
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}

//Постой лошадей
const JumboHoldUpWithHorse = () => {
    return(
        <>
            <Styles>
                <div fluid className='JumboHoldUpWithHorse condComp'>
                <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Постой лошадей</h1>
                                <Col>
                                    <h4>
                                        Создавать комфортные условия для жизни лошадей&nbsp;&mdash; наша работа!
                                    </h4>
                                    <p> 
                                        Для получении информации о&nbsp;наличии свободных мест для постоя, 
                                        вы&nbsp;можете оставить свой вопрос на&nbsp;странице&nbsp; <a href='/contacts'>контакты</a>&nbsp;
                                        или позвонить по&nbsp;номеру: {JumboObj.num}
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}

//Фотосессии с лошадьми
const JumboPhotoWithHorse = () => {
    return(
        <>
            <Styles>
                <div fluid className='JumboPhotoWithHorse condComp'>
                <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Фотосессии с лошадьми</h1>
                                <Col>
                                    <h4>
                                        Чтoбы вaши впeчaтлeния сoхрaнились нe&nbsp;тoлькo в&nbsp;вaшeй пaмяти, мы&nbsp;прeдлaгaeм прoфeссиoнaльную фoтoсeссию с&nbsp;лoшaдьми.
                                    </h4>
                                    <p> 
                                        Вы можете оставить заявку на странице&nbsp; <a href='/contacts'>контакты</a>&nbsp;
                                        или позвонить по номеру:{JumboObj.num}
                                    </p>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}

export { 
    JumboHippotherapy, 
    JumboEducationHorseRide, 
    JumboHorseRide, 
    JumboHoldUpWithHorse,
    JumboPhotoWithHorse
};