/**
 * Create by Kuznetsov Leonid 
 * 04.01.2022
 */
import { useForm } from 'react-hook-form';
import emailjs, { send, sendForm } from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { Button, Container, Form, CardGroup, Card, Spinner } from 'react-bootstrap';
import Iframe from './iframe';
import Massege from './massege.png';
import Phone from './phone.png';
import Point from './point.png';
import Youtube from './You.png';
import Telegram from './Tel.png';
import Instagram from './Inst.png';
import Vk from './Vk.png';
import Chess from './chess.png';



const ContactsBuild = () =>{
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
    
    const sendEmail = (e) => {
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
        //alert(JSON.stringify(data));
        sendEmail();
        //reset()
    }

    function load() {
        while (isValid) {
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
        }
    };

    


    return (
        <>
            <Container>
                <CardGroup style={{'marginTop':'50px'}}>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <h1>Наши контакты</h1>
                        <p><img className='mes' src={Massege} alt="." />&nbsp;ksk_armada@Yahoo.com</p>
                        <p><img className='ph' src={Phone} alt="." />&nbsp;+7 (967) 017-9963</p>
                        <p><img className='poi' src={Point} alt="." />&nbsp;Новорязанское шоссе, дер. Дурниха Раменского района владение 79, 25&nbsp;км от&nbsp;МКАД.</p>
                        <br/>
                        <h3>Мы в соцсетях</h3>
                        <div>
                            <Button disabled className = "pg-0" variant="link" href="#"><img className = "img-button-link You" src={Youtube} alt="." /></Button>
                            <Button disabled className = "pg-0" variant="link" href="#"><img className = "img-button-link Tel" src={Telegram} alt="." /></Button>
                            <Button className = "pg-0" variant="link" href="https://www.instagram.com/ksk_armada/" target='_blank'><img className = "img-button-link Inst" src={Instagram} alt="." /></Button>
                            <Button className = "pg-0" variant="link" href="https://vk.com/ksk_armada" target='_blank'><img className = "img-button-link Vk" src={Vk} alt="." /></Button>
                        </div>
                    </Card>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <div className="mapStyle">
                            <Iframe/>
                        </div>
                    </Card>
                </CardGroup>
                <CardGroup style={{'marginTop':'80px'}}>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <img src={Chess} alt="." />
                    </Card>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <h6>Остались вопросы?</h6>
                        <h1>Напишите нам</h1>       
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
                                            required: "Emali обязателен к заполнению",
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
                                                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
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
                            <Form.Group className="mb-3" controlId="formBasicCheckbox" name="checkbox">
                                <Form.Check {...register("checkbox",{
                                    required: true
                                }
                                )} type="checkbox" label="Я согласен получать сообщения от КСК Армада*" name="checkbox"/>
                            </Form.Group>
                            <div style={{color:'red'}}>{errors?.tel && <p>{errors?.tel?.message || "Error!"}</p>}</div>
                            <div style={{color:'red'}}>{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}</div>
                            <div style={{color:'red'}}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
                            <div>{load()}</div>
                            <br/>
                            <Button disabled={!isValid} variant="outline-dark" type="submit" value="Send" className = "mr-2 Get-con" id="send">Отправить</Button>
                    </Form>
                </Card>
                </CardGroup>
            </Container>
        </>
    )
};

export default ContactsBuild


    