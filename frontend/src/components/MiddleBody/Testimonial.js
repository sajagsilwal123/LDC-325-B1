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
                        <h1><strong>Message from Our District President</strong></h1>
                    </div>
                    
                    <Col xs={6} md={8} className='mx-auto mt-4'>
                    <center>
                    <Image src={leo} roundedCircle height='400'/>
                        <div class='mt-3 text-blue'>
                            <h2>
                                Leo Prakash Thapa Chhetri
                            </h2>
                            <h4>
                                <p class='text-muted'>
                                    "A leader is not the one who knows everything but a leader
                                    is the one who can do everything. So, in leadership coordination, cooperation and caliber is the most important thing to be remembered."
                               </p>
                            </h4>
                            
                        </div>
                    </center>
                    </Col>
                </Row>
            
            </Container>
        </div>
    )
}

export default Testimonial