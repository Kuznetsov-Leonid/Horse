import React from "react";
import ReactDOM from "react-dom";

const Iframe = () =>{
    return(
        <>
            <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.90555919026!2d38.119873531546105!3d55.53333832665408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDMyJzAwLjEiTiAzOMKwMDcnMTYuNSJF!5e0!3m2!1sru!2sru!4v1635156623268!5m2!1sru!2sru' class='mapContact'></iframe>"}} />
        </>
    );     
};

export default Iframe;
