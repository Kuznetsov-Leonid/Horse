import React from "react";

const MapCard = () => {
    return(
        <>
            <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://yandex.ru/map-widget/v1/-/CCUBzOsocC' class='mapContact' frameborder='1' allowfullscreen='true'></iframe>"}} />
        </>
    );     
};

const Reviews = () => {
    return(
        <>
        <div dangerouslySetInnerHTML={{ __html: "<div style=width:auto;height:800px;overflow:hidden;position:relative;'><iframe style='width:100%;height:100%;box-sizing:border-box' src='https://yandex.ru/maps-reviews-widget/73761087469?comments'></iframe><a href='https://yandex.ru/maps/org/armada/73761087469/' target='_blank' style='box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box'>Армада на карте Москвы и Московской области — Яндекс Карты</a></div>"}} />
        </>
    );
};

export {
    MapCard,
    Reviews
};
