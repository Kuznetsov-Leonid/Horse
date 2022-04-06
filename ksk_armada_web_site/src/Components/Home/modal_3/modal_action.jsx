import React from "react";
import {Button} from 'react-bootstrap';
import './style.css';

//Metrics
import { pingBtn } from '../../../Utils/metrics';

//<discount></discount>-стиль скидки
const modal_action = () => {
    return(
        <>
            <h4>
                Друзья, 10&nbsp;апреля нашему клубу исполняется два года!
                В&nbsp;честь этого замечательного события мы&nbsp;дарим Вам скидку&nbsp;20% на&nbsp;абонементы
                приобретённые в&nbsp;этот день!
            </h4>
            <br />
            <h5>
                Стоимость услуг:
            </h5>
            <hr/>
            <p>Разовое занятие индивидуальное <prise>2000&nbsp;руб</prise>;</p>
            <p>Групповое занятие (от&nbsp;3х&nbsp;человек) <prise>1500&nbsp;руб</prise>;</p>
            <p>Абонемент на&nbsp;8&nbsp;индивидуальных занятий <prise>14500&nbsp;руб.</prise>;</p>
            <p>Абонемент на&nbsp;8&nbsp;групповых занятий <prise>10400&nbsp;руб</prise>;</p>
            <p>Развивающие занятия для детей от&nbsp;3х&nbsp;до&nbsp;7ми лет 30-45 минут&nbsp;<prise>2000&nbsp;руб</prise>;</p>
            <p>Прогулка в&nbsp;поле 1.5 часа&nbsp;<prise>2500&nbsp;руб</prise>;</p>
            <hr/>
            <h5 className="txt_modal">
                По&nbsp;вопросу приобретения абонементов можете обратиться по&nbsp;телефону, 
                по&nbsp;форме обратной связи на&nbsp;странице <a href="/contacts">&laquo;контакты&raquo;</a> или 
                по&nbsp;эл. почте.
            </h5>
            <br />
            <div style={{'textAlign':'center'}}>
                <h4>
                    +7 (967) 017-99-63
                </h4>
                <h4>
                    ksk_armada@Yahoo.com
                </h4>
                <br />
                <Button 
                    variant="outline-dark" 
                    className = "mr-2 Get-con" 
                    href="https://dikidi.net/#widget=70567"
                    onClick={() =>{pingBtn('reachGoal', 'DikidiClick')}}>
                        Онлайн запись
                </Button>
            </div>
            
        </>
    )
}
export default modal_action