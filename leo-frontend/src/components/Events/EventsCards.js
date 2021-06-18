import React from 'react';
import './EventsCards.css';
import EventsCardItem from './EventsCardItems';
import { Link } from 'react-router-dom';
import leo from '../../public/images/leo.png'

function EventsCards() {
  return (
    <div className='EventsCards'>
      <h1>Dummy Dummy Dummy Dummy</h1>
      <div className='EventsCards__container'>
        <div className='EventsCards__wrapper'>
          <ul className='EventsCards__items'>
            <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Event Title'
            />

            <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy '
              label='Event Title'
            />
                      <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Event Title'
            /> 
          </ul>
          <ul className='EventsCards__items'>
            <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Event Title'
            />
            <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Event Title'
            /> 
                      <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Event Title'
            /> 
          </ul>
          <ul className='EventsCards__items'>
            <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Event Title'
            />
            <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Event Title'
            /> 
                      <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Event Title'
            /> 
          </ul>
          <ul className='EventsCards__items'>
            <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Event Title'
            />
            <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Event Title'
            /> 
                      <EventsCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Event Title'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventsCards;
