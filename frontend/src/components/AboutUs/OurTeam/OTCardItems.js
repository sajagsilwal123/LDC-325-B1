import React from 'react';
import './OTCards.css';
import { Link } from 'react-router-dom';
import {Row} from 'react-bootstrap';

function OTcardItem(props) {
  return (
    <> 
            <li className='OTcards__item'>
        <Link className='OTcards__item__link' to={props.path}>
          <figure className='OTcards__item__pic-wrap' data-category={props.label}>
            <img
              className='OTcards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>

          <Row className='OTcards__item__text py-3 px-3'>

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

export default OTcardItem;


