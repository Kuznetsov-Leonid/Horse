import React, { Component } from 'react';
import Service from '../Components/Services/serviceBuild';

export default class Services extends Component{
    render(){
        return(
            <>
                <div className='main'>
                    <Service/>
                </div>
            </>
        )
    }
}