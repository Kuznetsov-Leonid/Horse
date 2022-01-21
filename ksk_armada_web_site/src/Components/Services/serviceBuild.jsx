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
                                Комната отдыха с&nbsp;бытовой техникой, индивидуальные шкафчики, амуничники,
                                тёплый туалет,стиральная машина для вальтрапов, бинтов, легких попон.
                                Создавать комфортные условия для жизни лошадей&nbsp;&mdash; наша работа!
                            </p>
                            <p> 
                                Для получении информации о&nbsp;наличии свободных мест для постоя, 
                                вы&nbsp;можете оставить свой вопрос на&nbsp;странице <a href='/contacts'>контакты</a> <br />
                                или позвонить по&nbsp;номеру: <h3>+7 (967) 017-9963</h3>
                            </p>
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
                                Обучаем с&nbsp;основ до&nbsp;профессионального уровня, даже если 
                                Вы&nbsp;до&nbsp;этого никогда не&nbsp;были в&nbsp;седле. 
                                Уроки проходят в&nbsp;группах или индивидуально, а&nbsp;лошадки подбираются в&nbsp;соответствии с&nbsp;возрастом, 
                                весом и&nbsp;навыками всадника.
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
                                Наслаждайтесь природой и&nbsp;общением с&nbsp;животными. Лучший выбор для семейного отдыха и&nbsp;встреч с&nbsp;друзьями.
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
                                Чтoбы вaши впeчaтлeния сoхрaнились нe&nbsp;тoлькo в&nbsp;вaшeй пaмяти,
                                мы&nbsp;прeдлaгaeм прoфeссиoнaльную фoтoсeссию с&nbsp;лoшaдьми.
                            </p>
                            <p> 
                                Вы&nbsp;можете оставить заявку на&nbsp;странице <a href='/contacts'>контакты</a> <br />
                                или позвонить по&nbsp;номеру: <h3>+7 (967) 017-9963</h3>
                            </p>
                        </div>
                    </Card>
                </Container>  
            </CardGroup>   
        </>
    )
}

export default cerviceBuild

//А для владельцев лошадей полный пансион. На базе клуба работает опытный берейтор и тренеры.
//Так же на базе конюшни предлагаем услуги перевозки лошадей