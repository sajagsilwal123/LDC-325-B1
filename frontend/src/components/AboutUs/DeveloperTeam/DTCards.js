import React from 'react';
import './DTCards.css';
import DTcardItem from './DTCardItems';
import { Link } from 'react-router-dom';
import leo from '../../../public/images/leo.png'
import {Col, Row} from 'react-bootstrap'

function DTCards() {
  return (
    <div className='DTcards'>
      <h1>District Team for Lion Year 20/21</h1>
      <div className='DTcards__container'>
        <div className='DTcards__wrapper'>
          <ul className='DTcards__items'>

          <Col></Col>
                     <DTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='Vice-President'
            /> 
            
            <Col></Col>

          </ul>
          <ul className='DTcards__items'>
            <DTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='Vice-President'
            />
            <DTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='Vice-President'
            /> 
                      <DTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
          </ul>
          <ul className='DTcards__items'>
            <DTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />

            <DTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />
                      <DTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
          </ul>
          <ul className='DTcards__items'>
            <DTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            />
            <DTcardItem
              src={leo}
              title= 'Leo Dummy Dummy'
              text='Leo Club of Kathmandu Dummy'
              label='President'
            /> 
                      <DTcardItem
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

export default DTCards;
