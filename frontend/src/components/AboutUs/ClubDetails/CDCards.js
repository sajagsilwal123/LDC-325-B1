import React from 'react';
import './CDCards.css';
import CDCardItem from './CDCardItems';
import { Link } from 'react-router-dom';
import leo from '../../../public/images/leo.png'

function CDCards() {
  return (
    <div className='CDcards'>
      <h1>Club Details</h1>
      <div className='CDcards__container'>
        <div className='CDcards__wrapper'>
          <ul className='CDcards__items'>
            <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Swoyambhu Town'
              text='Club Id: 12345 '
              path=''
            />

            <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            />
                      <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            /> 
          </ul>
          <ul className='CDcards__items'>
            <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            />
            <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            /> 
                      <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            /> 
          </ul>
          <ul className='CDcards__items'>
            <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            />
            <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            /> 
                      <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            /> 
          </ul>
          <ul className='CDcards__items'>
            <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            />
            <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            /> 
                      <CDCardItem
              src={leo}
              title= 'Leo Club of Kathmandu Dummy Dummy'
              text='Club Id: 12345 '
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CDCards;
