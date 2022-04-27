/**
 * Create by Kuznetsov Leonid 
 * 22.04.2021
 */

import React, { useRef, useState } from 'react';
import { Modal, Button, Form, CardGroup, Card, Spinner, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs, { send, sendForm } from 'emailjs-com';
import Info from '../info';

const OnlineEntry = () => {
    
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
        
        //обработка формы обратной связи
        const sendEmail = (e) => {
                //  test ---- 'service_td3yqi6', 'template_g27ul53', form.current, 'user_RBIjAEvAriwtz46L0hxec'
                //  ARMADA ---- 'service_rla1tl2', 'template_04b0tu1', form.current, 'user_W6DyZvFT710FcvSPQiVd2'
                let addClassSelector = document.querySelector("#loaderForm");
                emailjs.sendForm('service_rla1tl2', 'template_04b0tu1', form.current, 'user_W6DyZvFT710FcvSPQiVd2')
                .then((result) => {
                    console.log(result.text);
                        function success() {
                            alert("Спасибо, мы скоро с Вами свяжемся!");
                            console.log("Успешное отправление формы.");
                            reset();
                        }
                            success();
                    }, (error) => {
                        console.log(error.text);
                        function notSuccess() {
                            alert("Что-то пошло не так, ошибка отправки.");
                            console.log("Ошибка отправки формы.");
                            reset();
                        } 
                            notSuccess();
                    });
                return (e.preventDefault())
            }   
    
        const onSubmit = (data) => {
            //Для отладки
            // alert(JSON.stringify(data));
            // reset()
            sendEmail();
        }

    return(
        <>
            <Button
                variant="outline-dark" 
                className = "mr-2 Get-con" 
                onClick={handleShow}>
                    Онлайн запись
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Онлайн запись</Modal.Title>
                </Modal.Header>
                <Container>
                <CardGroup>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>      
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
                            <br/>
                            
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Закрыть
                                </Button>
                                <Button disabled={!isValid} 
                                        variant="outline-dark" 
                                        type="submit" 
                                        value="Send" 
                                        className = "mr-2 Get-con" 
                                        id="send"
                                        onClick={handleClose}>
                                    Отправить
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Card>
                </CardGroup>
                </Container>
            </Modal>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );
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


export default OnlineEntry