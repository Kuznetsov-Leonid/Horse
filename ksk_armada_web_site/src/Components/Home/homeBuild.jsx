/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 * 
 * Последнее обновление 17.03.2022
 */
import React, { useState} from 'react';
import { Button, Container, Modal, CardGroup, Card, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from './logogtype.png';

//Импорты первого модального окна
import preview1 from './prev1.jpg';
import Modal1 from './modal_1/modal_rent';

//Импорты второго модального окна
import prew2 from './prew3.jpg';
import Modal2 from './modal_3/modal_action';

//Импорты третьего модального окна
import prew3 from './modal_2/img7.jpg';
import Modal3 from './modal_2/ksk_starset';

//Metrics
import { pingBtn } from '../../Utils/metrics';

const HomeBuild = () =>{
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    
    return (
        <>
            <div className='home-bg'>
                <Container style={{
                    'padding-top': '1px',
                    'padding-bottom': '1px', 
                    'width':'auto', 
                    'height':'auto'
                }}
                    >
                    <CardGroup>
                        <Card style = {{
                            'background': 'transparent', 
                            'border': 'none', 
                            'margin':'20px'
                        }}
                            >
                                <img className='imgLogo' src={Logo} alt="." />
                            <div className='btn-pj'>
                                <NavLink to="/aboutUs">
                                    <Button 
                                        variant="outline-dark" 
                                        style = {{
                                            'border':'solid #F75E05 1px',
                                            'color':'#F75E05',
                                            'width': '124px'
                                        }}
                                        onClick={() => {pingBtn('reachGoal','clickAboutUs')}}>
                                        О нас
                                    </Button>
                                </NavLink>
                                <NavLink to="/services" >
                                    <Button 
                                        variant="outline-dark" 
                                        className='Services'
                                        style = {{
                                            'width': '124px'
                                        }}
                                        onClick={() => {pingBtn('reachGoal','clickServices')}}>
                                        Услуги
                                    </Button>
                                </NavLink>
                            </div>
                        </Card>
                        
                        <Card style = {{
                            'background': 'transparent', 
                            'border': 'none', 
                            'margin':'20px',
                            'borderRadius':'20px'
                            }}>
                            <Carousel variant="dark">
                                <Carousel.Item style={{
                                    'backgroundColor':'gray', 
                                    'height':'650px',
                                    'borderRadius':'20px'
                                    }}>
                                    <img style={{
                                        'width':'100%',
                                        'borderRadius':'20px'
                                        }} 
                                        src={preview1} 
                                        alt="." 
                                    />
                                    <Carousel.Caption>
                                        <h5 style={{
                                            'backgroundColor':'white',
                                            'opacity':'70%'
                                            }}>
                                                Постой для лошадей.
                                        </h5>
                                        <Button variant="primary" onClick={() => setModalShow1(true)}>
                                            Узнать больше.
                                        </Button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item style={{
                                    'backgroundColor':'white', 
                                    'height':'650px',
                                    'borderRadius':'20px'
                                    }}>
                                    <img style={{
                                            'width':'100%',
                                            'borderRadius':'20px'
                                            }} 
                                            src={prew2} 
                                            alt="Прокат лошадей" 
                                        />
                                    <Carousel.Caption>
                                        <h5 style={{
                                            'backgroundColor':'white',
                                            'opacity':'70%'
                                            }}>
                                                Акция в КСК Армада!!!
                                        </h5>
                                        <Button variant="primary" onClick={() => setModalShow2(true)}>
                                            Узнать больше.
                                        </Button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item style={{
                                    'backgroundColor':'white', 
                                    'height':'650px',
                                    'borderRadius':'20px'
                                    }}>
                                    <img style={{
                                            'width':'100%',
                                            'borderRadius':'20px'
                                            }} 
                                            src={prew3} 
                                            alt="Прокат лошадей" 
                                        />
                                    <Carousel.Caption>
                                        <h5 style={{
                                            'backgroundColor':'white',
                                            'opacity':'70%'
                                            }}>
                                                Выездка в КСК Созвездие.
                                        </h5>
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
            <MyVerticallyCenteredModal_2 show={modalShow2} onHide={() => setModalShow2(false)}/>
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
                        Постой для лошадей.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal1/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }

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
                        Акция!!!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal2/>
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
                        Выездка в КСК Созвездие.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal3/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>    
        );
    }
}

export default HomeBuild

