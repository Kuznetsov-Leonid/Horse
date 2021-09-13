/**
 * Create by Kuznetsov Leonid 
 * 9:00  13.09.2021
 */ 
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Footer extends Component{  
    render() {
        return(
            <>
            
                <Container sticky = "bottom" fluid style = {{
                    'display':'flex',
                    'backgroundColor':'#212529',
                    'color':'white',
                    'width':'100%'
                    }}>
                    <Container style = {{
                        'display':'flex',
                        'JustifyContent':'center',
                        'padding':'10px'
                        }}>
                        <p>Footer content</p>
                    </Container>
                </Container>
            
            </>
        );
    }
}