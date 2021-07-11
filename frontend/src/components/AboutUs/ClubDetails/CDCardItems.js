import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
import './CDCards.css';

function EventsCardItem(props) {
  return (
    <Col sm={4} className='mt-4'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <Row className='cards__item__text py-3 px-3'>
            <Col sm={4}>
              <div className='h3 text-center text-yellow pt-4' >
                <div className='color'>
                    {props.date}
                </div>
            

              </div>
            </Col>
            <Col sm={8}>
              <h3 class="text-dark">{props.title}</h3>
              <p class='text-secondary'>
              {props.text}
              </p>

            </Col>
          </Row>
        </Link>
    </Col>
  );
}

export default EventsCardItem;


