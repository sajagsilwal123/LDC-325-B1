import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import leo from '../../public/images/leo.png'
import './hero.css'

function Join(){
    return(
    <div>
        <Container className='mb-5 pb-5'>
            <Row>
                <Col>
                   <div className='hero-font'>
                       A Leo, <br></br>
                       A Change,<br></br>
                       And You.<br></br>
                   </div>
                    <button className='btn btn-primary mt-5'>
                            <div className='h4 pt-2 px-5'>
                                Join the Change
                            </div>
                    </button>
                </Col>
                <Col>
                <center>
                <img src={leo} height='350px' />

                </center>
                </Col>
            </Row>
           
        </Container>
    </div>
    )
}

export default Join