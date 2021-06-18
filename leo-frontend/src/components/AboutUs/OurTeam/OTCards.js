import React from 'react';
import './OTCards.css';
import OTcardItem from './OTCardItems';
import { Link } from 'react-router-dom';
import leo from '../../../public/images/leo.png'

function OTCards() {
  return (
    <div className='OTcards'>
      <h1>District Team for Lion Year 20/21</h1>
      <div className='OTcards__container'>
        <div className='OTcards__wrapper'>
          <ul className='OTcards__items'>
            <OTcardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            />
            <OTcardItem
              src={leo}
              text='Yogesh Gautam'
              label='Name'
            />
                      <OTcardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
          </ul>
          <ul className='OTcards__items'>
            <OTcardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Name'
            />
            <OTcardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
                      <OTcardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
          </ul>
          <ul className='OTcards__items'>
            <OTcardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            />

            <OTcardItem
              src={leo}
              text='Yogesh Gautam'
              label='Name'
            />
                      <OTcardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
          </ul>
          <ul className='OTcards__items'>
            <OTcardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy'
              label='Name'
            />
            <OTcardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Name'
            /> 
                      <OTcardItem
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

export default OTCards;
