/**
 * Create by Kuznetsov Leonid 
 * 24.12.2021
 */
import React, { useState} from 'react';
import { Button, Container, CardGroup, Card, Modal} from 'react-bootstrap';
import Modal1 from '../Home/modal_1/modal_rent';

const CerviceBuild = () =>{
    const [modalShow1, setModalShow1] = useState(false);

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
                                Создавать комфортные условия для жизни лошадей&nbsp;&mdash; наша работа!
                            </p>
                            <p>
                                <Button variant="primary" onClick={() => setModalShow1(true)}>
                                                Узнать больше.
                                </Button>
                            </p>
                            <p> 
                                Для получении информации о&nbsp;наличии свободных мест для постоя, 
                                вы&nbsp;можете оставить свой вопрос на&nbsp;странице <a href='/contacts'>контакты</a> <br />
                                или позвонить по&nbsp;номеру: <h3>+7 (967) 017-99-63</h3>
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
                                или позвонить по&nbsp;номеру: <h3>+7 (967) 017-99-63</h3>
                            </p>
                        </div>
                    </Card>
                </Container>  
            </CardGroup>   

            <MyVerticallyCenteredModal_1 show={modalShow1} onHide={() => setModalShow1(false)}/>
        </>
    );
    
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
}

export default CerviceBuild

//А для владельцев лошадей полный пансион. На базе клуба работает опытный берейтор и тренеры.
//Так же на базе конюшни предлагаем услуги перевозки лошадей