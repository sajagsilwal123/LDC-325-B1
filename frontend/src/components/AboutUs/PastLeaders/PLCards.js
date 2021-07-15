import React from 'react';
import './PLCards.css';
import PLCardItem from './PLCardItems';
import leo from '../../../public/images/leo.png'

function PLCards() {
  return (
    <div className='PLcards'>
      <h1>Past District Leaders</h1>
      <div className='PLcards__container'>
        <div className='PLcards__wrapper'>
          <ul className='PLcards__items'>
            <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />
            <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />
                      <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
          </ul>
          <ul className='PLcards__items'>
            <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />
            <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
                      <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
          </ul>
          <ul className='PLcards__items'>
            <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />

            <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />
                      <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
          </ul>
          <ul className='PLcards__items'>
            <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />
            <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
                      <PLCardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
          </ul>

        </div>
      </div>
    </div>
  );
}

export default PLCards;
