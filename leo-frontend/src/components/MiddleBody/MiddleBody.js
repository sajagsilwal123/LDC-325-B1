import React from 'react'
import {Carousel} from 'react-bootstrap'
import LDC325B1 from "../../public/images/LDC325B1.png"
import DP from "../../public/images/DP.png"
import leo from "../../public/images/leo.png"
import test from "../../public/images/test.png"
import css from './hero.css'
import "./MidCards.css"
import {Row, Container, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
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
                    <Carousel>
                        <Carousel.Item>
                        <Card border="dark" >
                            <Card.Body>
                            <h5>What is LEO?</h5>
                            <Card.Text>
                            Leo Club is an international organization. It is a youth organization of Lions Clubs International.                               
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
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                        <Card >
                            <Card.Img variant="top" src={LDC325B1}/>

                                <Card.Title>Objectives</Card.Title>
                                <Card.Text>
                                The Objectives of LEO are:
                                <br/>
                                       <ul>
                                        <li>
                                            To promote service activities among youth.                                        
                                        </li>

                                        <li>
                                            To Develop Leadership qualities via Experience and Opportunity.                                        
                                        </li>

                                        <li>
                                            To Unite youth and promote fellowship                                         
                                        </li>                                  
                                      </ul>
                                </Card.Text>
                        </Card>
                        </Carousel.Item>

                    </Carousel>
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

                        </Card.Text>
                        </Card.Body>
                           </div>
                          
                       </div>
                   </div>                       
                    </Card>
                    </Col>

                    <Col md={4} sm={12}>
                    <Carousel>
                        <Carousel.Item>
                        <Card border="dark" >
                            <Card.Body>
                            <h5>What is LEO?</h5>
                            <Card.Text>
                            Leo Club is an international organization. It is a youth organization of Lions Clubs International.                               
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
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Carousel.Item>

                        <Carousel.Item>
                        <Card >
                            <Card.Img variant="top" src={DP}/>

                                <Card.Title>Objectives</Card.Title>
                                <Card.Text>
                               
                                </Card.Text>
                        </Card>
                        </Carousel.Item>
                    </Carousel>

                    </Col>

                </Row>
                
            </Container>

        </div>
                      

    )
}

export default MiddleBody