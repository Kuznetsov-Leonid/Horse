/**
 * Create by Kuznetsov Leonid 
 * 30.09.2021
 */ 
import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Container} from 'react-bootstrap';

const Loading = () =>{
    return (
        <Container className="Load">
            <Spinner animation="border" variant="warning" />
            
        </Container>
    )
}
//<Spinner animation="grow" variant="warning" />
export default Loading