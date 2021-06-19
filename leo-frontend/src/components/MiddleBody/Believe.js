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
                 <div class="h1 text-blue font-weight-bold display-4">
                 What we believe in?
                 </div>
                 <p class='text-secondary mt-3'>
                 Over 1.4 million Lions across the globe are stepping up to serve their communities during the coronavirus (COVID-19) pandemic. These new challenges have changed the way we live, but our dedication to helping those in need is as strong as it was when we first opened our doors more than 100 years ago.             
                 </p>
            </Col>
            <Col md={5} className="text-center">
                 <img src={decYellow} height="200" style={{marginLeft:'0.4em'}} alt='leo logo'/> 
            </Col>
        </Row>
      
    </Container>

    );
}

export default Believe
