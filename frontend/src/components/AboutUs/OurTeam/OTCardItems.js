import React from 'react';
import './OTCards.css';
import { Link } from 'react-router-dom';
import {Row} from 'react-bootstrap'
import leo from '../../../public/images/leo.png';

function OTCardItem(props) {
  return (
    <React.Fragment>
      <li className='PLcards__item'>
        <Link className='PLcards__item__link' to={props.path}>
          <figure className='PLcards__item__pic-wrap' data-category={props.label}>
            <img
              className='PLcards__item__img'
              alt='Travel Image'
              src={props.src}
              onError={(e)=>{e.target.onError = null; e.target.src = leo}}
            />
          </figure>

          <Row className='PLcards__item__text py-3 px-3'>

              <h5 class="text-dark">{props.title}</h5>
              <h6 class='text-secondary'>
              {props.text ? props.text : '\u00A0'}
              </h6>

          </Row>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default OTCardItem;


