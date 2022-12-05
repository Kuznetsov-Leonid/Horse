/**
 * Create by Kuznetsov Leonid 
 * 19:25  10.09.2021
 */ 

import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import horse1 from '../img/h1.jpg';
import horse2 from '../img/h2.jpg';
import horse3 from '../img/h3.jpg';
import horse4 from '../img/h4.jpg';

export default class Slider extends Component{
    render() {
        return(
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={horse1}
                            alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3>Первый</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={horse2}
                            alt="Second slide"
                        />
                    <Carousel.Caption>
                        <h3>Второй</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={horse3}
                            alt="Dfrist slide"
                        />
                    <Carousel.Caption>
                        <h3>Третий</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={horse4}
                            alt="Dfrist slide"
                        />
                    <Carousel.Caption>
                        <h3>Четвёртый</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}