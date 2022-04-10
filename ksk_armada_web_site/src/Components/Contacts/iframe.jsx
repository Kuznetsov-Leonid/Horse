import React from "react";

const Iframe = () =>{
    return(
        <>
            <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://yandex.ru/map-widget/v1/-/CCUBzOsocC' class='mapContact' frameborder='1' allowfullscreen='true'></iframe>"}} />
        </>
    );     
};

export default Iframe;
