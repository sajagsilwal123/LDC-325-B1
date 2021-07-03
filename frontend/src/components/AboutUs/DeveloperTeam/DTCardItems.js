import React from 'react';
import './DTCards.css';
import { Link } from 'react-router-dom';
import {Row} from 'react-bootstrap';

function DTcardItem(props) {
  return (
    <> 
            <li className='DTcards__item'>
        <Link className='DTcards__item__link' to={props.path}>
          <figure className='DTcards__item__pic-wrap' data-category={props.label}>
            <img
              className='DTcards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>

          <Row className='DTcards__item__text py-3 px-3'>

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

export default DTcardItem;


