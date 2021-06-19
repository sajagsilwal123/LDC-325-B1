import React from 'react'
import {Row, Container, Col, Image} from 'react-bootstrap'
import leo from '../../public/images/DP.png'

function Testimonial(){
    return(
        <div>
            <Container>
                <Row className='my-5'>
                    <Col xs={6} md={6} className='mx-auto'>
                    <center>
                    <Image src={leo} roundedCircle height='200'/>
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