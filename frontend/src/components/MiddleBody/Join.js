import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import leo from '../../public/images/leo.png'
import LDC325B1 from '../../public/images/LDC325B1.png'
import { Link } from 'react-router-dom';
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
                   <a href="https://www.lionsclubs.org/en/resources-for-members/resource-center/start-a-leo-club" target="_blank">
                       <button className='btn btn-primary mt-5'>
                            <div className='h4 pt-2 px-5'>                                
                                Join The Change                            
                            </div>
                    </button>
                   </a>
                    
                </Col>
                <Col>
                    <center>
                        <img src={leo} height='300px' />
                    </center>
                </Col>
                <Col>
                    <center>
                        <img src={LDC325B1} height='300px' />
                    </center>
                </Col>
            </Row>
           
        </Container>
    </div>
    )
}

export default Join
