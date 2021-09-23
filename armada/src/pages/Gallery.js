import React, {Component} from 'react'
import { 
    Container, 
    Card,
    Row,
    Col,
    ListGroup,
    ListGroupItem, 
    Form, 
    NavDropdown, 
    Modal, 
    Button, 
    Accordion, 
    CardGroup} from 'react-bootstrap';
import { BrowserRouter as Router, 
    Switch, 
    Route, 
    Link } from 'react-router-dom';
    import photo from '../img/logo192.png'
    
export default class Gallery extends Component{
    render(){
        return(
            <>
            <Container>
                <Card>
                    <Card.Header as="h2" style={{'text-align':'center'}}>Галерея</Card.Header>
                </Card>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={photo} />
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
            </>
        )
    }
}