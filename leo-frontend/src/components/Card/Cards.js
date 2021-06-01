import React from 'react';
import './Cards.css';
import CardItem from './CardItems';
import { Link } from 'react-router-dom';
import leo from '../../public/images/leo.png'

function Cards() {
  return (
    <div className='cards'>
      <h1>Dummy Dummy Dummy Dummy</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={leo}
              text='Dummy Dummy Dummy'
              path='/ourTeam'
            />

            <CardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy '
              path='/PastLeaders'
            />
                      <CardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Dummy'
              path='/ourTeam'
            /> 
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Dummy'
              path='/Resources'
            />
            <CardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Dummy'
              path='/ourTeam'
            /> 
                      <CardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Dummy'
              path='/ourTeam'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
