import React from 'react'
import {Carousel} from 'react-bootstrap'
import test3 from '../../public/images/3.jpg'
import LDC325B1 from "../../public/images/LDC325B1.png"
import test1 from "../../public/images/1.jpg"
import test2 from "../../public/images/2.jpg"
import test from "../../public/images/test.png"
import css from './hero.css'
const Hero = () => {
    return(
        <div>
                      
<Carousel  fade>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={test1}
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={test2}
      alt="Second slide"
    />

    <Carousel.Caption>
     <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={test3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Hero