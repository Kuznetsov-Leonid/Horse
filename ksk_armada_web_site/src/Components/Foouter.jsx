/**
 * Create by Kuznetsov Leonid 
 * 20.12.2021
 */
import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, CardGroup, Card, Button, Form, Spinner } from 'react-bootstrap';
import Youtube from '../img/Subtract.png';
//import Facebook from '../img/Vector-0.png';
//import Twitter from '../img/Vector-1.png';
import Telegram from '../img/Vector-2.png';
import Instagram from '../img/Vector-3.png';
import Vk from '../img/Vector-5.png';
import Mail from '../img/Mail.png';
import Phone from '../img/Phone.png';
import Equestrian from '../img/equestrian.png';





const Fouter = () =>{


    //Отправка формы на почту https://dashboard.emailjs.com => orlan1211@yahoo.com
    const form = useRef();
    const sendEmail = (e) => {
        emailjs.sendForm('service_td3yqi6', 'template_g27ul53', form.current, 'user_RBIjAEvAriwtz46L0hxec')
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

        const onSubmit = (data) => {
            //alert(JSON.stringify(data)); 
            sendEmail();
        }
    
    return (
        <>  
        
            <div className='container_foouter'>
                <Container>
                    <CardGroup>
                        <Card
                            style = {{
                                    'background': 'transparent',
                                    'border': 'none',
                                    'textAlign':'center',
                                    'marginTop': '15px'}}
                            className='component_fouter'>
                            <h6 className='component_title'>МЫ В СОЦСЕТЯХ</h6>
                            <span>
                                <Button disabled className = "pg-0" variant="link" href="#"><img className = "img-button-link You" src={Youtube} alt="." /></Button>
                                <Button disabled className = "pg-0" variant="link" href="#"><img className = "img-button-link Tel" src={Telegram} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="https://www.instagram.com/ksk_armada/" target='_blank'><img className = "img-button-link Inst" src={Instagram} alt="." /></Button>
                                <Button className = "pg-0" variant="link" href="https://vk.com/ksk_armada" target='_blank'><img className = "img-button-link Vk-fut" src={Vk} alt="." /></Button>       
                            </span>
                        </Card>
                        <Card   
                            style = {{
                                    'background': 'transparent',
                                    'border': 'none',
                                    'textAlign':'center',
                                    'marginTop': '15px'}}
                            className='component_fouter'>
                                <h6 className='component_title'>НАШИ КОНТАКТЫ</h6>
                                <p className = "Card-three-txt"><img className = "Ph-1" src={Phone} alt="." />+7 (967) 017-9963</p>
                                <p className = "Card-three-txt"><img className = "Ma-1" src={Mail} alt="." />ksk_armada@Yahoo.com</p>
                        </Card>
                        <Card   
                            style = {{
                                    'background': 'transparent',
                                    'border': 'none',
                                    'textAlign':'center',
                                    'marginTop': '15px'}}
                            className='component_fouter'>
                                <h6 className='component_title'>КАРТА САЙТА</h6>
                                    <a className='map-link' href="/contacts">Контакты</a>
                                    <a className='map-link' href='/'>Главная</a>
                                    <a className='map-link' href="/services">Услуги</a>
                                    <a className='map-link' href="/aboutUs">О нас</a>
                        </Card>
                        <Card
                            style = {{
                                    'background': 'transparent',
                                    'border': 'none',
                                    'textAlign':'center',
                                    'marginTop': '15px'}}
                            className='component_fouter'>
                                <h6 className='component_title'>Подпишитесь на наши новости</h6>
                                
                                <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control style={{
                                        'background': 'rgba(255, 255, 255, 0.12)',
                                        'border': '1px solid rgba(255, 255, 255, 0.2)',
                                        'color':'white'
                                    }} 
                                    {...register("email", {
                                        required: "Emali обязателен к заполнению",
                                        pattern: {
                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: "Некорректный email"
                                        }
                                    })}
                                    type="email" placeholder="Email address" />
                                    <br />
                                    <div style={{color:'red'}}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox" name="checkbox">
                                        <Form.Check {...register("checkbox",{
                                            required: true
                                        }
                                        )} style={{'color':'white'}} type="checkbox" label="Я согласен получать сообщения от КСК Армада*" name="checkbox"/>
                                    </Form.Group>
                                    <div style={{'marginBottom':'10px'}}>{load()}</div>
                                    <Button disabled={!isValid} type="submit">Подписаться</Button>
                                </Form.Group>
                            </Form>

                        </Card>
                    </CardGroup> 
                </Container>
            </div>
                
            <div className = "Background-color-sub-fouter">
                <CardGroup style = {{'textAlign':'center'}}>
                    <Card style = {{'background': 'transparent', 'border': 'none', 'height': '15px'}} >
                            <p className = "fouter-copir-txt">
                                &copy;&ensp; All rights reserved. Made with by Orlan1211@yahoo.com. E.S.C. ARMADA
                                <img src={Equestrian} alt="." id = "Equestrian"/>
                            </p>
                    </Card>
                </CardGroup>
            </div>   
        </> 
    )
}

export default Fouter
