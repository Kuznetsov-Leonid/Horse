/**
 * Create by Kuznetsov Leonid 
 * 04.01.2022
 */
import React from 'react';
import { Button, Container, Form, CardGroup, Card } from 'react-bootstrap';
import { Reviews, MapCard } from './iframe';
import Massege from './massege.png';
import Phone from './phone.png';
import Point from './point.png';
//import Youtube from './You.png';
import Telegram from './Tel.png';
//Временно запр. в РФ
//import Instagram from './Inst.png';
import Vk from './Vk.png';
import Chess from './chess.png';




const ContactsBuild = () =>{
    return (
        <>
            <Container>
                <CardGroup style={{
                    'marginTop':'50px'
                    }}>
                    <Card style = {{
                        'background': 'transparent', 
                        'border': 'none'
                        }}>
                        <h1>Наши контакты</h1>
                        <p><img className='mes' src={Massege} alt="." />&nbsp;ksk_armada@Yahoo.com</p>
                        <p><img className='ph' src={Phone} alt="." />&nbsp;+7 (967) 017-99-63</p>
                        <p><img className='poi' src={Point} alt="." />&nbsp;Новорязанское шоссе, дер. Дурниха Раменского района владение 79, 25&nbsp;км от&nbsp;МКАД.</p>
                        <br/>
                        <h3>Мы в соцсетях</h3>
                        <div>
                            {/* Временно отсутствует */}
                            {/* <Button disabled className = "pg-0" variant="link" href="#"><img className = "img-button-link You" src={Youtube} alt="." /></Button> */}
                            {/* Временно запрещённое в РФ */}
                            {/* <Button className = "pg-0" variant="link" href="https://www.instagram.com/ksk_armada/" target='_blank'><img className = "img-button-link Inst" src={Instagram} alt="Instagram" /></Button> */}
                            <Button className = "pg-0" variant="link" href="https://t.me/ksk_armada" target='_blank'>
                                <img className = "img-button-link Tel" src={Telegram} alt="." />
                            </Button>
                            <Button className = "pg-0" variant="link" href="https://vk.com/ksk_armada" target='_blank'>
                                <img className = "img-button-link Vk" src={Vk} alt="vk" />
                            </Button>
                        </div>
                    </Card>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <div className="mapStyle">
                            <MapCard/>
                        </div>
                    </Card>
                </CardGroup>
                <CardGroup style={{'marginTop':'80px'}}>
                    {/* <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <img src={Chess} alt="." />
                    </Card> */}
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <Reviews/>
                    </Card>
                    <Card style = {{'background': 'transparent', 'border': 'none'}}>
                        <img src={Chess} alt="." />
                    </Card>
                    
                </CardGroup>
            </Container>
            
            
        </>
    )
    
    
};

export default ContactsBuild


