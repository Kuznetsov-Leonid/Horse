import React, { Component } from 'react';
import HomeBuild from '../Components/Home/homeBuild';

export default class Home extends Component{
    render(){
        return(
            <> 
                <div className='main'>
                    <HomeBuild/>
                </div>
            </>
        )
    }
}