import React from 'react';
import './EventsCards.css';
import EventsCardItem from './EventsCardItems';
import { Link } from 'react-router-dom';
import leo from '../../public/images/leo.png'

function EventsCards() {
  return (
    <div className='EventsCards'>
      <h1>Events</h1>
      <div className='EventsCards__container'>
        <div className='EventsCards__wrapper'>
          <ul className='EventsCards__items'>
            <EventsCardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />
              <EventsCardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />
            <EventsCardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />
          </ul>
          <ul className='EventsCards__items'>
            <EventsCardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />
              <EventsCardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />
            <EventsCardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />
          </ul>
          <ul className='EventsCards__items'>
            <EventsCardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />
              <EventsCardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />
            <EventsCardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventsCards;
