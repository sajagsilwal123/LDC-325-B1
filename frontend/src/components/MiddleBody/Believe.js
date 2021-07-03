import React from 'react'
import decYellow from "../../public/images/decoration yellow.png"
import {Row, Container, Col} from 'react-bootstrap'
import "./MidCards.css"
import css from './hero.css'


const Believe = () => {
    return(
        <Container className="mt-5 pt-5">
        <Row>
            <Col md={7} className="border-left">
                <h3>Leo Club is an international organization. It is a youth organization of Lions Clubs International.</h3>                               
                                       <br/>
                                       <ul>
                                        <li>
                                            <h5>   <strong>L</strong>   stands for  <strong>Leadership</strong> which comprises self-awareness, gratitude, ability to delegate,
                                              learning agility, and influence.
                                            </h5>                                        
                                        </li>
                                        <li>
                                            <h5>
                                                <strong>E</strong>  stands for <strong>Experience</strong>, followed by leadership, observation,
                                                knowledge, and perception.
                                            </h5>
                                            
                                        </li>

                                        <h5>
                                            <li>
                                            <strong>O</strong>  stands for <strong>Opportunity</strong> led by hard work, dedication, and interest.
                                        </li>
                                        </h5>
                                        
                                      
                                    </ul>
            </Col>
            <Col md={5} className="text-center">
                 <img src={decYellow} height="200" style={{marginLeft:'5em'}} alt='leo logo'/> 
            </Col>
        </Row>
      
    </Container>

    );
}

export default Believe