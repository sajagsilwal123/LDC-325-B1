import React from 'react';
import './OTCards.css';
import OTcardItem from './OTCardItems';
import { Link } from 'react-router-dom';
import leo from '../../../public/images/leo.png'
import {Col} from 'react-bootstrap'

function OTCards() {
  return (
    <div className='OTcards'>
      <h1>District Team for Lion Year 20/21</h1>
      <div className='OTcards__container'>
        <div className='OTcards__wrapper'>
          <ul className='OTcards__items'>
          <Col></Col>
            <OTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='Vice-President'
            />             
            <Col></Col>
          </ul>
          <ul className='OTcards__items'>
            <OTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='Vice-President'
            />
            <OTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='Vice-President'
            /> 
                      <OTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
          </ul>
          <ul className='OTcards__items'>
            <OTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />

            <OTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />
                      <OTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
          </ul>
          <ul className='OTcards__items'>
            <OTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />
            <OTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
                      <OTcardItem
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

export default OTCards;
