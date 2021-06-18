import React from 'react';
import './CDCards.css';
import CDCardItem from './CDCardItems';
import { Link } from 'react-router-dom';
import leo from '../../../public/images/leo.png'

function CDCards() {
  return (
    <div className='CDcards'>
      <h1>Dummy Dummy Dummy Dummy</h1>
      <div className='CDcards__container'>
        <div className='CDcards__wrapper'>
          <ul className='CDcards__items'>
            <CDCardItem
              src={leo}
              label='Leo Club Of Kathmandu ABCDEF'
              text='Dummy Dummy Dummy'
            />

            <CDCardItem
              src={leo}
              label='Leo Club Of Kathmandu ABCDEF'
              text='Dummy Dummy Dummy Dummy Dummy Dummy '
            />
                      <CDCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Leo Club Of Kathmandu ABCDEF'
            /> 
          </ul>
          <ul className='CDcards__items'>
            <CDCardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Leo Club Of Kathmandu ABCDEF'
            />
            <CDCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Leo Club Of Kathmandu ABCDEF'
            /> 
                      <CDCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Leo Club Of Kathmandu ABCDEF'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CDCards;
