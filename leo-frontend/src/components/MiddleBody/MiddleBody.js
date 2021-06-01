import React from 'react'
import {Carousel} from 'react-bootstrap'
import LDC325B1 from "../../public/images/LDC325B1.png"
import test from "../../public/images/test.png"
import css from './hero.css'
import "./MidCards.css"
import {Row, Container, Col, Card} from 'react-bootstrap'
import {Link} from "react-router-dom"

const MiddleBody = () => {
    return(
        <div>
            <br></br>
            <br></br>
            <br></br>

            <Container>
                <Row className="my-3">
                    <Col md={4} sm={12}>
                    <Card bg="light"  > 

                            <Card.Body >
                                <h3>Secondary Card Title</h3>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.fhjgksdfagfdgsalfhjkdsahf;kadshiojfhb;jkfasdhjklf;sdahklj;fdsa
                                Some quick example text to build on the card title and make up the bulk Some quick example text to build on the card title and make up the bulk
                                of the card's content.fhjgksdfagfdgsalfhjkdsahf;kadshiojfhb;jkfasdhjklf;sdahklj;fdsa
                                of the card's content.fhjgksdfagfdgsalfhjkdsahf;kadshiojfhb;jkfasdhjklf;sdahklj;fdsa
                                </Card.Text>
                            </Card.Body>
                        </Card> 

                    </Col>
                    
                    <Col md={4} sm={12}>
                      
                    <Card bg="light" border = "light">
                    <figure className='cardss__item__pic-wrap' >
                            <img
                            className='cardss__item__img'
                            alt='Travel Image'
                            src={LDC325B1}
                            />
                        </figure>
                   <div className='cardss__container'>
                       <div className='cardss__wrapper'>
                           <div className='cardss__items'>
                                 <Card.Body>
                        <Card.Title>
                            
                        </Card.Title>
                        <Card.Text>
                            <h1>Leo District Council 325B1, Nepal</h1>
                        </Card.Text>
                        </Card.Body>
                           </div>
                          
                       </div>
                   </div>
                       
                    </Card>
                    </Col>
                    <Col md={4} sm={12}>
                    <Card bg="light" > 

                            <Card.Body>
                            <h3>What is LEO?</h3>
                                <Card.Text>

                                   Leo Club is an international organization. It is a youth organization of Lions Clubs International.                               
                                       <br/>
                                       <ul>
                                        <li>
                                            <h5>   <strong>L</strong>   stands for Leadership which comprises self-awareness, gratitude, ability to delegate,
                                              learning agility, and influence.
                                            </h5>                                        
                                        </li>
                                        <li>
                                            <h5>
                                                <strong>E</strong>  stands for Experience, followed by leadership, observation,
                                                knowledge, and perception.
                                            </h5>
                                            
                                        </li>

                                        <h5>
                                            <li>
                                            <strong>O</strong>  stands for Opportunity led by hard work, dedication, and interest.
                                        </li>
                                        </h5>
                                        
                                      
                                    </ul>
                                  
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                       
                    </Col>

                </Row>
                
            </Container>

        </div>
                      

    )
}

export default MiddleBody