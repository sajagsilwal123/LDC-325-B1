import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Dummy Dummy Dummy'
              label='Dummy'
              path='/ourTeam'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Dummy Dummy Dummy Dummy Dummy Dummy '
              label='Luxury'
              path='/PastLeaders'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Dummy'
              path='/Resources'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Dummy Dummy Dummy Dummy Dummy DummyDummy Dummy Dummy Dummy Dummy Dummy'
              label=' Dummy'
              path='/OurTeam'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Dummy Dummy Dummy Dummy Dummy DummyDummy Dummy Dummy Dummy Dummy Dummy'
              label=' Dummy'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
