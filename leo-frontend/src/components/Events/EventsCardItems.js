import React from 'react';
import './EventsCards.css';
import { Link } from 'react-router-dom';

function EventsCardItem(props) {
  return (
    <>
      <li className='EventsCards__item'>
        <Link className='EventsCards__item__link' to={props.path}>
          <figure className='EventsCards__item__pic-wrap' data-category={props.label}>
            <img
              className='EventsCards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='EventsCards__item__info'>
            <h3 className='EventsCards__item__text'>{props.titlle}</h3>
            <h5 className='EventsCards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default EventsCardItem;


