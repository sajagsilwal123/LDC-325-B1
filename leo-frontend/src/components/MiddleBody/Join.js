import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import leo from '../../public/images/leo.png'


function Join(){
    return(
    <div>
        <Container className='mb-5'>
            <Row>
                <Col>
                   <div class='h1'>
                       A Leo 
                       A Change
                       And You
                   </div>
                    <button className='btn btn-primary'>Join the Change</button>
                </Col>
                <Col>
                <center>
                <img src={leo} height='300px' />

                </center>
                </Col>
            </Row>
           
        </Container>
    </div>
    )
}

export default Join