import React from 'react';
import './PLCards.css';
import { Link } from 'react-router-dom';
import {Row} from 'react-bootstrap'

function PLCardItem(props) {
  return (
    <>
      <li className='PLcards__item'>
        <Link className='PLcards__item__link' to={props.path}>
          <figure className='PLcards__item__pic-wrap' data-category={props.label}>
            <img
              className='PLcards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>

          <Row className='PLcards__item__text py-3 px-3'>

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

export default PLCardItem;


