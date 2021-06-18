import React from 'react';
import './OTCards.css';
import { Link } from 'react-router-dom';

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
          <div className='OTcards__item__info'>
            <h3 className='OTcards__item__text'>{props.titlle}</h3>
            <h5 className='OTcards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default OTcardItem;


