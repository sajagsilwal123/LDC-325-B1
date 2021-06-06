import React from 'react'
import {Carousel} from 'react-bootstrap'
import leo from '../../public/images/leo.png'
import test from "../../public/images/test.png"
import css from './hero.css'
const Hero = () => {
    return(
        <div>
                      
<Carousel  fade>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={test}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={test}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={test}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Hero