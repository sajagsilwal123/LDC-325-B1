import React from 'react';
import './CDCards.css';
import { Link } from 'react-router-dom';

function CDCardItem(props) {
  return (
    <>
      <li className='CDcards__item'>
        <Link className='CDcards__item__link' to={props.path}>
          <figure className='CDcards__item__pic-wrap' data-category={props.label}>
            <img
              className='CDcards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='CDcards__item__info'>
            <h3 className='CDcards__item__text'>{props.titlle}</h3>
            <h5 className='CDcards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CDCardItem;


