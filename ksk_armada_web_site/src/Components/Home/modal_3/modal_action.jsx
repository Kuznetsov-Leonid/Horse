import React from "react";
import {Button} from 'react-bootstrap';
import './style.css';


const modal_action = () => {
    return(
        <>
            <h4>
                Продажа абонементов на 8 индивидуальных занятий со скидкой 10%!!!
            </h4>
            <p>Акция продлится до конца марта.</p>
            <br />
            <h5>
                Стоимость услуг:
            </h5>
            <hr/>
            <p>Разовое занятие индивидуальное <prise>2000 руб</prise>;</p>
            <p>Групповое занятие (от 3х человек) <prise>1500 руб</prise>;</p>
            <p>Абонемент на 8 индивидуальных занятий <discount>14500 руб.</discount> <prise>13050 руб</prise>;</p>
            <p>Абонемент на 8 групповых занятий  <prise>10400 руб</prise>;</p>
            <p>Развивающие занятия для детей от 3х до 7ми лет 30-45 минут  <prise>2000 руб</prise>;</p>
            <p>Прогулка в поле 1.5 часа  <prise>2500 руб</prise>;</p>
            <hr/>
            <h5 className="txt_modal">
                По&nbsp;вопросу приобретения абонемннтов можете обратиться по&nbsp;телефону, 
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
                <Button variant="outline-dark" className = "mr-2 Get-con" href="https://dikidi.net/#widget=70567">Онлайн запись</Button>
            </div>
            
        </>
    )
}
export default modal_action