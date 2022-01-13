import React from "react";
import ReactDOM from "react-dom";

const Iframe = () =>{
    return(
        <>
            <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.9631236894165!2d38.11875201590936!3d55.533011580495156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414abfaafc54d4df%3A0xab181c2b95aabf9b!2z0JrQodCaINCQ0YDQvNCw0LTQsA!5e0!3m2!1sru!2sru!4v1642010155423!5m2!1sru!2sru' class='mapContact'></iframe>"}} />
        </>
    );     
};

export default Iframe;
