/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 */
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs, { send, sendForm } from 'emailjs-com';
import {Button, Container, Nav, Navbar, Modal, Form, CardGroup, Card, Spinner} from 'react-bootstrap';
import { BrowserRouter, Route, NavLink, Routes, widthRouter } from 'react-router-dom';
import Foouter from './Foouter';
import Info from '../Components/info';
//Metrics
import { pingBtn } from '../Utils/metrics';

//Routing
import Home from "../Pajes/Home";
import Services from "../Pajes/Services";
import AboutUs from "../Pajes/AboutUs";
import Contacts from "../Pajes/Contacts";
import NotFound from "../Pajes/NotFound";
import PoliticsConf from '../Pajes/InfoCookie';

//Email ksk-armada@yahoo.com

const Header = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);

    const form = useRef();
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onTouched"
    }); 

    function load() {
        return (
            <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Обработка формы...
            </Button>
        );
    };

        //обработка формы обратной связи
        const sendEmail = (e) => {
            //  test ---- 'service_td3yqi6', 'template_g27ul53', form.current, 'user_RBIjAEvAriwtz46L0hxec'
            //  ARMADA ---- 'service_rla1tl2', 'template_04b0tu1', form.current, 'user_W6DyZvFT710FcvSPQiVd2'
            let addClassSelector = document.querySelector("#loaderForm");
            addClassSelector.classList.remove('noneShowLoad');
            emailjs.sendForm('service_rla1tl2', 'template_04b0tu1', form.current, 'user_W6DyZvFT710FcvSPQiVd2')
            .then((result) => {
                console.log(result.text);
                    function success() {
                        addClassSelector.classList.add('noneShowLoad');
                        alert("Спасибо, мы скоро с Вами свяжемся!");
                        console.log("Успешное отправление формы.");
                        reset();
                    }
                        success();
                }, (error) => {
                    console.log(error.text);
                    function notSuccess() {
                        addClassSelector.classList.add('noneShowLoad');
                        alert("Что-то пошло не так, ошибка отправки.");
                        console.log("Ошибка отправки формы.");
                        reset();
                    } 
                        notSuccess();
                });
            return (e.preventDefault())
        }   

    const onSubmit = (data) => {
        //alert(JSON.stringify(data));
        sendEmail();
        //reset()
    }


    return (
        <>
            <BrowserRouter forceRefresh={true} basename="/">
                <Navbar sticky = "top" collapseOnSelect className='headerBG' variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand style = {{'color':'white'}} href="/">КСК АРМАДА</Navbar.Brand>
                        <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                        <Navbar.Collapse id = "responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link><NavLink to="/" className = "linkColor">Главная</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/services" className = "linkColor">Услуги</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/aboutUs" className = "linkColor">О нас</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/contacts" className = "linkColor">Контакты</NavLink></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button
                                variant="outline-dark" 
                                className = "mr-2 Get-con" 
                                onClick={handleShow}>
                                    Онлайн запись
                            </Button>
                        </Nav>
                            
                        </Navbar.Collapse>
                        
                    </Container>
                </Navbar>   
                <Routes>
                    <Route exact path ="/" element={<Home/>} />
                    <Route exact path ="/services" element={<Services/>} />
                    <Route exact path ="/aboutUs" element={<AboutUs/>} />
                    <Route exact path ="/contacts" element={<Contacts/>} />
                    <Route exact path="/PoliticsConf" element={<PoliticsConf/>}/>
                    <Route exact path="*" element={<NotFound/>} />
                </Routes>
                <Foouter/>
            </BrowserRouter>
            

            <Modal show={show} onHide={handleClose}>
                <Container>
                <Modal.Header closeButton>
                <Modal.Title>Онлайн запись</Modal.Title>
                </Modal.Header>
                <Form ref={form} onSubmit={handleSubmit(onSubmit)}> 
                            <CardGroup>
                                <Card style = {{'background': 'transparent', 'border': 'none', 'marginRight':'5px'}}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Имя*</Form.Label>
                                        <Form.Control {...register("name", {
                                            required: "Имя обязательно к заполнению",
                                        })}
                                        type="name" placeholder="Ваше имя" name="name" />
                                        <br/>
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control {...register("email", {
                                            required: "Email обязателен к заполнению",
                                            pattern: {
                                                value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                                message: "Некорректный email"
                                            }
                                        })}
                                        type="email" placeholder="Ваш email" name="email"/>
                                    </Form.Group>
                                </Card>
                                <Card style = {{'background': 'transparent', 'border': 'none', 'marginLeft':'5px'}}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Фамилия</Form.Label>
                                        <Form.Control {...register("last_name")} type="name" placeholder="Ваша фамилия" name="last_name" />
                                        <br/>
                                        <Form.Label>Номер телефона*</Form.Label>
                                        <Form.Control {...register("tel", {
                                            required: "Номер телефона обязателен к заполнению",
                                            pattern: {
                                                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,14}(\s*)?$/,
                                                message: "Некорректный номер"
                                            }
                                        })}
                                        type="phone" placeholder="Ваш номер телефона" name="tel"/>
                                    </Form.Group>
                                </Card>
                            </CardGroup>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Сообщение</Form.Label>
                                <Form.Control {...register("message")} type="messege" placeholder="Ваше сообщение" as="textarea" name="message"  rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox" name="checkbox1">
                                <Form.Check {...register("checkbox1",{
                                    required: true
                                }
                                )} type="checkbox" label="Я согласен получать сообщения от КСК Армада*" name="checkbox1"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox" name="checkbox2">
                                <div style={{'display':'flex', 'margin':'0'}}>
                                    <Form.Check {...register("checkbox2",{
                                        required: true
                                    }
                                    )} type="checkbox" name="checkbox2"/>
                                    &nbsp; Согласие на обработку&nbsp;<a onClick={() => setModalShow(true)} id="personInfo">персональных данных</a>*
                                </div>
                            </Form.Group>
                            <div style={{color:'red'}}>{errors?.tel && <p>{errors?.tel?.message || "Error!"}</p>}</div>
                            <div style={{color:'red'}}>{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}</div>
                            <div style={{color:'red'}}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
                            <div className='noneShowLoad' id='loaderForm'>{load()}</div>
                            <br/>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Закрыть
                            </Button>
                            <Button disabled={!isValid} variant="outline-dark" type="submit" value="Send" className = "mr-2 Get-con" id="send" onClick={handleClose}>Отправить</Button>
                            </Modal.Footer>
                            </Form>
                            </Container>
                        </Modal>
                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    )
    function MyVerticallyCenteredModal(props) {
        return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Политика в&nbsp;отношении обработки персональных данных
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Info/>
            </Modal.Body>
            <Modal.Footer>
                <Button Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
        );
    }
}

export default Header
