import React from 'react';
import './CDCards.css';
import { Link } from 'react-router-dom';
import {Col,Row} from 'react-bootstrap';

function CDCardItem(props) {
  return (
    <>
      <li className='CDcards__item'>
          <Link className='CDcards__item__link' to={props.path}>
            <figure className='CDcards__item__pic-wrap'>
              <img
                className='CDcards__item__img'
                alt='Travel Image'
                src={props.src}
              />
            </figure>
            <Row className='CDcards__item__text py-3 px-3'>

                <h4 class="text-dark">{props.title}</h4>
                <p class='text-secondary'>
                {props.text}

                </p>

            </Row>
          </Link>
      </li>
    </>
  );
}



export default CDCardItem;


