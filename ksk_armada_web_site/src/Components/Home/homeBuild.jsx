/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 */
import React, { useState } from 'react';
import { Button, Container, Modal, CardGroup, Card, Carousel } from 'react-bootstrap';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import Logo from './logogtype.png';
import preview1 from './imgKonkur1.jpg';
import konkur from './imgKonkur2.jpg';
import preview2 from './childShowTitle.jpg';
import img1 from './childShow1.jpg';
import img2 from './childShow2.jpg';
import img3 from './showChild3.jpg';
import img4 from './showChild4.jpg';
import img5 from './showChild5.jpg';
import img6 from './showChild6.jpg';
import img7 from './showChild7.jpg';
import img8 from './showChild8.jpg';
import img9 from './showChild9.jpg';
import img10 from './showChild10.jpg';
import img11 from './showChild11.jpg';
import img12 from './showChild12.jpg';





const HomeBuild = () =>{
    const [modalShow1, setModalShow1] = useState(false);
    //const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);

    return (
        <>
            <div className='home-bg'>
                <Container style={{'padding-top': '1px', 'padding-bottom': '1px', 'width':'auto', 'height':'auto'}}>
                    <CardGroup>
                        <Card style = {{'background': 'transparent', 'border': 'none', 'margin':'20px'}}>
                            <img className='imgLogo' src={Logo} alt="." />
                            <div className='btn-pj'>
                                <NavLink to="/aboutUs"><Button variant="outline-dark" 
                                style = {{
                                    'border':'solid #F75E05 1px',
                                    'color':'#F75E05',
                                    'width': '124px'
                                }}>О нас</Button></NavLink>
                                <NavLink to="/services" ><Button variant="outline-dark" className='Services'
                                style = {{'width': '124px'}}>Услуги</Button></NavLink>
                            </div>
                        </Card>
                        <Card style = {{'background': 'transparent', 'border': 'none', 'margin':'20px'}}>
                        <Carousel variant="dark">
                            <Carousel.Item style={{'backgroundColor':'gray', 'height':'650px'}}>
                                <img style={{'width':'100%'}} src={preview1} alt="." />
                                <Carousel.Caption>
                                <h5 style={{'backgroundColor':'white','opacity':'70%'}}>Внутриклубные соревнования по конкуру 23.01.2022г.</h5>
                                
                                <Button variant="primary" onClick={() => setModalShow1(true)}>
                                    Узнать больше.
                                </Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{'backgroundColor':'white', 'height':'650px'}}>
                                <img style={{'width':'100%'}} src={ preview2} alt="." />
                                <Carousel.Caption>
                                <h5 style={{'backgroundColor':'white','opacity':'70%'}}>Новый год в КСК Армада.</h5>
                                <Button variant="primary" onClick={() => setModalShow3(true)}>
                                    Узнать больше.
                                </Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </Card>
                    </CardGroup>
                </Container>
            </div>

            <MyVerticallyCenteredModal_1 show={modalShow1} onHide={() => setModalShow1(false)}/>
            
            <MyVerticallyCenteredModal_3 show={modalShow3} onHide={() => setModalShow3(false)}/>
        </>
    )

    function MyVerticallyCenteredModal_1(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Старты! Внутриклубные соревнования по&nbsp;конкуру
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>пройдут 23.01.2022г.</h4>
                <img style={{'width':'100%'}} src={konkur} alt="." />
                <p>
                    Приглашаем спортсменов&nbsp;&mdash; любителей принять участие в 
                    соревнования по&nbsp;конкуру, которые пройдут у&nbsp;нас в&nbsp;клубе
                    23&nbsp;января 2022&nbsp;года.
                </p>
                <p>
                    Маршруты:
                </p>
                <ul>
                    <li>Кавалетти (зачёт дети ,любители , дети с&nbsp;хендлером)</li>
                    <li>кавалетти + (Зачёт дети, любители) </li>
                    <li>маршрут 40см с&nbsp;приближением к&nbsp;норме времени </li>
                    <li>Зачёт (дети, любители)</li>
                    <li>маршрут до&nbsp;60&nbsp;см (Зачёт дети, любители)</li>
                    <li>маршрут 70&nbsp;см ( зачёт дети, любители)</li>
                    <li>маршрут&nbsp;90 (общий)</li>
                </ul>
                <p>Стартовые взносы:</p>
                <ul>
                    <li>1000 руб&nbsp;&mdash; кавалетти для детей</li>
                    <li>Остальные&nbsp;&mdash; 1500 руб</li>
                </ul>
                <h5>Заявки принимаются строго до&nbsp;21.01.2022 до&nbsp;16:00 по&nbsp;телефону +79652408628 (Алина Владимировна)</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    //<MyVerticallyCenteredModal_2 show={modalShow2} onHide={() => setModalShow2(false)}/>
    // <Carousel.Item style={{'backgroundColor':'gray', 'height':'650px'}}>
    // <Carousel.Caption>
    // <h5>Масленница в Армаде!</h5>
    // <Button variant="primary" onClick={() => setModalShow2(true)}>
    //     Узнать больше.
    // </Button>
    // </Carousel.Caption>
    //</Carousel.Item>
    function MyVerticallyCenteredModal_2(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Масленница в Армаде!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4> Cras mattis consectetur</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    function MyVerticallyCenteredModal_3(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ёлка в&nbsp;честь нового года.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>18.12.2021г.</h4>
                <p>
                    18&nbsp;декабря 2021 года у&nbsp;нас в&nbsp;КСК Армада состоялся новогодний праздник.
                    Спортсмены нашего клуба подготовили новогоднее представление, 
                    в&nbsp;программе которго были костюмированные выступления, конкурсы, эстафеты,
                    живая музыка и&nbsp;конечно&nbsp;же Дед Мороз и&nbsp;подарки!
                </p>
                <img className='snowChildShowPhoto' src={img1} alt="." />
                <img className='snowChildShowPhoto' src={img2} alt="." />
                <img className='snowChildShowPhoto' src={img3} alt="." />
                <img className='snowChildShowPhoto' src={img4} alt="." />
                <img className='snowChildShowPhoto' src={img5} alt="." />
                <img className='snowChildShowPhoto' src={img6} alt="." />
                <img className='snowChildShowPhoto' src={img7} alt="." />
                <img className='snowChildShowPhoto' src={img8} alt="." />
                <img className='snowChildShowPhoto' src={img9} alt="." />
                <img className='snowChildShowPhoto' src={img10} alt="." />
                <img className='snowChildShowPhoto' src={img11} alt="." />
                <img className='snowChildShowPhoto' src={img12} alt="." />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default HomeBuild

