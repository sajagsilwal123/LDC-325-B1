import React from 'react'
import {Row, Container, Col, Image} from 'react-bootstrap'
import leo from '../../public/images/DP.png'
import './hero.css'


function Testimonial(){
    return(
        <div>
            <Container>
                <Row className='my-5 '>
                    <div className='colour'>
                        <h1><strong>Message from District President</strong></h1>
                    </div>
                    
                    <Col xs={6} md={8} className='mx-auto mt-4'>
                    <center>
                    <Image src={leo} roundedCircle height='400'/>
                        <div class='mt-3 text-blue'>
                            <h2>
                                Leo Prakash Thapa
                            </h2>
                            <p class='text-muted'>
                                "message message"
                            </p>
                        </div>
                    </center>
                    </Col>
                </Row>
            
            </Container>
        </div>
    )
}

export default Testimonial