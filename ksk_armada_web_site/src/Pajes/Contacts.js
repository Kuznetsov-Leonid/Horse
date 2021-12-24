import React, { Component } from 'react';
import ContBuild from '../Components/Contacts/ContactsBuild';

export default class Contacts extends Component{
    render(){
        return(
            <>
                <div className='main'>
                    <ContBuild/>
                </div>
            </>
        )
    }
}