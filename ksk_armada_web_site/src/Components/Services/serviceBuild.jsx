/**
 * Create by Kuznetsov Leonid 
 * 24.12.2021
 */
import React from 'react';
import { Button, Container, CardGroup, Card} from 'react-bootstrap';

const cerviceBuild = () =>{
    
    return (
        <>
            <CardGroup>
                <Card style = {{'background': 'transparent', 'border': 'none', 'margin':'20px'}}>
                    <h1 style={{'textAlign':'center'}}>Услуги</h1>
                </Card>
            </CardGroup>
            <CardGroup className='nav-bg-1'>
                <Container>
                    <Card className='nav-content-1' style={{'background-color': '#C4C4C4'}}>
                        <div className='content-display'>
                            <h1>Постой лошадей</h1>
                            <p>
                                Комната отдыха с бытовой техникой, индивидуальные шкафчики, амуничники,
                                тёплый туалет,стиральная машина для вальтрапов, бинтов, легких попон.
                                Создавать комфортные условия для жизни лошадей - наша работа!
                            </p>
                            <Button className='btn-online-signUp' variant="outline-dark" href="https://dikidi.net/#widget=70567">Онлайн запись</Button>
                        </div>
                    </Card>
                </Container>
            </CardGroup>
            <CardGroup className='nav-bg-2'>
                <Container>
                    <Card className='nav-content-2' style={{'background-color': '#FBC9C9'}}>
                        <div className='content-display'>
                            <h1>Обучение верховой езде</h1>
                            <p>
                                Обучаем с основ до профессионального уровня, даже если 
                                Вы до этого никогда не были в седле. 
                                Уроки проходят в группах или индивидуально, а лошадки подбираются в соответствии с возрастом, 
                                весом и навыками всадника.
                            </p>
                            <Button className='btn-online-signUp' href="https://dikidi.net/#widget=70567" variant="outline-dark">Онлайн запись</Button>
                        </div>
                    </Card>
                </Container>
            </CardGroup>
            <CardGroup className='nav-bg-3'>
                <Container>
                    <Card className='nav-content-1' style={{'background-color': '#C4C4C4'}}>
                        <div className='content-display'>
                            <h1>Конные прогулки</h1>
                            <p>
                                Наслаждайтесь природой и общением с животными. Лучший выбор для семейного отдыха и встреч с друзьями.
                            </p>
                            <Button className='btn-online-signUp' href="https://dikidi.net/#widget=70567" variant="outline-dark">Онлайн запись</Button>
                        </div>
                    </Card>
                </Container>
            </CardGroup>
            <CardGroup className='nav-bg-4'>
                <Container>
                    <Card className='nav-content-2' style={{'background-color': '#FBC9C9'}}>
                        <div className='content-display'>
                            <h1>Фотосессии с лошадьми</h1>
                            <p>
                                Чтoбы вaши впeчaтлeния сoхрaнились нe тoлькo в вaшeй пaмяти,
                                мы прeдлaгaeм прoфeссиoнaльную фoтoсeссию с лoшaдьми.
                            </p>
                            <Button className='btn-online-signUp' href="https://dikidi.net/#widget=70567" variant="outline-dark">Онлайн запись</Button>
                        </div>
                    </Card>
                </Container>  
            </CardGroup>   
        </>
    )
}

export default cerviceBuild
