import React from 'react';
import './PLCards.css';
import { Link } from 'react-router-dom';

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
          <div className='PLcards__item__info'>
            <h3 className='PLcards__item__text'>{props.titlle}</h3>
            <h5 className='PLcards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PLCardItem;


