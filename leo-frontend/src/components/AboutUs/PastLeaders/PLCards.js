import React from 'react';
import './PLCards.css';
import PLCardItem from './PLCardItems';
import { Link } from 'react-router-dom';
import leo from '../../../public/images/leo.png'

function PLCards() {
  return (
    <div className='PLcards'>
      <h1>District Team for Lion Year 20/21</h1>
      <div className='PLcards__container'>
        <div className='PLcards__wrapper'>
          <ul className='PLcards__items'>
            <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            />
            <PLCardItem
              src={leo}
              text='Yogesh Gautam'
              label='Name'
            />
                      <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
          </ul>
          <ul className='PLcards__items'>
            <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Name'
            />
            <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
                      <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
          </ul>
          <ul className='PLcards__items'>
            <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            />

            <PLCardItem
              src={leo}
              text='Yogesh Gautam'
              label='Name'
            />
                      <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
          </ul>
          <ul className='PLcards__items'>
            <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Name'
            />
            <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
                      <PLCardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
          </ul>

        </div>
      </div>
    </div>
  );
}

export default PLCards;
