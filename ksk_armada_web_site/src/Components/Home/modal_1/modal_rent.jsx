import React from "react";
import photo1 from './phto1.jpg';
import photo2 from './phto2.jpg';
import photo3 from './phto3.jpg';
import photo4 from './phto4.jpg';

const modal_rent = () => {
    return(
        <>
        <h4>
            В&nbsp;стоимость постоя входит:
        </h4>
        <p>
            Cтандартный денник 3&times;3&nbsp;с автопоилкой и&nbsp;кормушкой
            &mdash;&nbsp;подстилка&nbsp;&mdash; древесная стружка, уборка ежедневная.
        </p>
        <p>
            Сено вволю (по&nbsp;примерным подсчетам выходит около 20&nbsp;кг на&nbsp;голову), в&nbsp;денники раздается 4&nbsp;раза в&nbsp;день, в&nbsp;левадах лежит постоянно.
        </p>
        <p>
            Концентраты: овес/овес/каша. Овес плющеный, каша&nbsp;&mdash; плющеный овес + отруби. 
            Добавление подкормок, замачивание втм и&nbsp;т.п. входит в&nbsp;стоимость.
        </p>
        <p>
            Выгул от&nbsp;3-4x часов. По&nbsp;возможности стараемся отправить гулять на&nbsp;максимально длительное время.
        </p>
        <p>
            Для работы: крытая бочка 18&nbsp;м, манеж 18&times;50, конкурный и&nbsp;выездковый плацы, поля, комплект препятствий. 
            В&nbsp;клубе регулярно проводятся домашние соревнования, так&nbsp;же команда выезжает на&nbsp;старты в&nbsp;другие клубы. 
            Есть коневоз!
        </p>
        <p>
            Конюшня на&nbsp;ветучёте, вакцинации и&nbsp;дегельминтизации по&nbsp;графику.
            Курирующий коваль&nbsp;&mdash; Владимир Халецкий и&nbsp;Воробьева Полина, но&nbsp;можно пригласить своего специалиста.
        </p>
        <img className='snowChildShowPhoto' src={photo1} alt="." />
        <img className='snowChildShowPhoto' src={photo2} alt="." />
        <img className='snowChildShowPhoto' src={photo3} alt="." />
        <img className='snowChildShowPhoto' src={photo4} alt="." />
        <h4>
            Для владельцев лошадей:
        </h4>
        <p>
            Парковка, амуничники, комната отдыха с&nbsp;бытовой техникой, теплый туалет, стиральная машина.
        </p>
        <h4>
            По вопросам аренды обращайтесь по телефону или по эл.&nbsp;почте: 
        </h4>
        <br/>
        <div style={{'textAlign':'center'}}>
            <h3>
                +7 (967) 017-99-63
            </h3>
            <br />
            <h5>
                ksk_armada@Yahoo.com
            </h5>
            <br />
        </div>
        
        </>
    )
}
export default modal_rent