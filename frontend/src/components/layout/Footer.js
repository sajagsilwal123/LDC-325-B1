import React from 'react'
import {Row, Container, Col} from 'react-bootstrap'
import leo from '../../public/images/leo.png'
import {Link} from "react-router-dom";
import "./footer.css"



const Footer = () => {
    return(
        <div className="footer">
                    
            <Container>
                <Row className="my-3">
                    <Col md={5} sm={12}>
                    <img src={leo} className="footer-image" alt='lions logo' /> 
                        <p>
                            <bR></bR>
                        Over 1.4 million Lions across the globe are stepping
                        <br></br>
                         up to serve their communities durin.

                        </p>
                    <h2 className="footer-title">
                    Leo District Council <br/>
                    325 B1, Nepal
                        </h2>
                        <div class="border-bottom"></div>

                    </Col>
                    
                    <Col md={3} sm={12}>
                        <br/>
                        <h2 className="footer-title">
                            Links
                        </h2>
                        <div class="border-bottom"></div>
                            <p> 
                                <Link to = "/" className="footer-clr" >
                                     HOME
                                </Link>
                            </p>
                           
                        <p>
                            <Link to = "/events" className="footer-clr" >
                                    EVENTS
                            </Link>
                        </p>
                        <p>
                        <Link to = "/OurTeam" className="footer-clr" >
                            OUR TEAM
                            </Link>                            
                        
                        </p>
                        <p>
                            <Link to = "/clubdetails" className="footer-clr" >
                                    CLUB DETAILS
                            </Link>
                            
                        </p>
                        {/* <p>
                            <Link to = "/enewsletter" className="footer-clr" >
                                    e-NEWSLETTER
                            </Link>

                        </p> */}
                    </Col>
                    <Col md={4} sm={12}>
                        <br/>
                    <h2 className="footer-title">
                            Contact
                        </h2>
                        <div class="border-bottom"></div>
 
                        <p>
                        leo.325b1@gmail.com
                        </p>
                        {/* <p>
                        013212313/ 123123123
                        </p> */}
                        <p>
                        Kalanki, Kathmandu
                        </p>
                    </Col>

                    <Col md={25} className="text-center mt-5">

                    <Col className="text-center">
                        <section className='social-media'>
                        <div class='social-media-wrap'>


                        <div className='social-icons'>
                            <a href={"https://www.facebook.com/leo325b1"} 
                            className='social-icon-link facebook'
                            target="_blank"
                           >
                               <i class='fab fa-facebook' />
                            </a>

                            <a href={"https://www.instagram.com/ldc325b1nepal/"} className='social-icon-link facebook'
                           target="_blank"
                           >
                               <i class='fab fa-instagram' />
                           </a>

                           <a href={"https://www.youtube.com/channel/UC7b-_0hBqX1CPzxbzSrNn0A"} className='social-icon-link facebook'
                           target="_blank"
                           >
                               <i class='fab fa-youtube' />
                           </a>

                        </div>
                        </div>
                    </section>

                    </Col>
                    </Col>
                    <Col md={12} className="text-center mt-5">
                        <p>
                        Copyright ©2021, Leo District Council 325 B1

                        </p>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Footer