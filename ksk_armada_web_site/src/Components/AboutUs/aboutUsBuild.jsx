/**
 * Create by Kuznetsov Leonid 
 * 24.12.2021
 */
import React, { useState } from 'react';
import {Container, Card, CardGroup, ListGroup, Accordion } from 'react-bootstrap';
import Horse from './horse.png';

const aboutUsBuild = () =>{


    return (
        <>
            <div style={{margin:'15px 0px 15px 0px'}}>
            <Container>
                    <CardGroup>
                        <Card style={{'border':'none'}}>
                            <Card.Img variant="top"  
                                    style={{
                                        'width':'auto',
                                        'height':'auto',
                                        'display': 'block',
                                        'margin-left': 'auto',
                                        'margin-right': 'auto'
                                        }} 
                                    src={Horse} />
                            <Card.Body>
                                <Card.Text style={{
                                    'text-align':'center',
                                    'width':'auto',
                                    'height':'auto'
                                    }}>
                                    <h5>Конно-спортивный клуб &laquo;Армада&raquo; приглашает на&nbsp;постой лошадей любого пола и&nbsp;возраста!</h5>
                                    Работаем с&nbsp;9:00 до&nbsp;21:00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{'border':'none', 'height':'auto'}}>
                        <Card.Body>
                            <Card.Title style={{'text-align':'center'}}><h2>О&nbsp;нас</h2></Card.Title>
                            <ListGroup>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                    <Accordion.Header>Конюшня</Accordion.Header>
                                    <Accordion.Body>
                                    Высокие потолки и&nbsp;большие окна. Денники стандартные 3&times;3&nbsp;м., оборудованные автопоилками.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                    <Accordion.Header>Кормление</Accordion.Header>
                                    <Accordion.Body>
                                    Сено&nbsp;&mdash; от&nbsp;15&nbsp;кг в&nbsp;сутки, раздаётся 4&nbsp;раза в&nbsp;денники и&nbsp;докладывается в&nbsp;левады.
                                    Концентраты: 3&nbsp;раза в&nbsp;день, овес/каша/овес по&nbsp;вашим нормам. 
                                    Дача подкормок и&nbsp;ваших дополнительных кормов ( мюсли, жмыхи, жомы и&nbsp;т.&nbsp;д) входит в&nbsp;стоимость постоя!
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                    <Accordion.Header>Уборка денников</Accordion.Header>
                                    <Accordion.Body>
                                    Основная&nbsp;&mdash; утром, далее пробор навоза и&nbsp;мокрых опилок&nbsp;&mdash; в&nbsp;течение дня. 
                                    Подстилка&nbsp;&mdash; древесная стружка.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                    <Accordion.Header>Для работы</Accordion.Header>
                                    <Accordion.Body>
                                    Имеется крытый манеж, выездковый и&nbsp;конкурный плацы, крытая бочка и&nbsp;уличный кодовый круг. 
                                    Есть выезд в&nbsp;поля.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                    <Accordion.Header>Выгул</Accordion.Header>
                                    <Accordion.Body>
                                    Выгул от&nbsp;4-х часов в&nbsp;день! 
                                    Стабуненные лошади гуляют от&nbsp;8&nbsp;часов! 
                                    В&nbsp;левадах есть сено и&nbsp;организован водопой.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                    <Accordion.Header>Персонал</Accordion.Header>
                                    <Accordion.Body>
                                    У&nbsp;нас работают опытные русскоговорящие конюхи!
                                    Вежливые и&nbsp;ответственные. 
                                    Подкормки, попоны, пролив/замачивание сена, рептух.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                    <Accordion.Header>Для владельцев</Accordion.Header>
                                    <Accordion.Body>
                                    Комната отдыха, индивидуальные шкафчики, амуничники, тёплый туалет.
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    До&nbsp;конюшни легко добраться как на&nbsp;автомобиле, 
                                    так и&nbsp;общественным транспортом 
                                    ( от&nbsp;метро Кузьминки идёт автобус и&nbsp;маршрутка прямо до&nbsp;ворот конюшни!)
                                    <h5>Наш адрес: Новорязанское шоссе, дер. Дурниха Раменского района владение 79, 25&nbsp;км от&nbsp;МКАД.</h5>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default aboutUsBuild