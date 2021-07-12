import React from 'react';
import './DTCards.css';
import DTcardItem from './DTCardItems';
import leo from '../../../public/images/leo.png'
import sajag from '../../../public/images/Developers/sajag.jpg'
import {Col} from 'react-bootstrap'

function DTCards() {
  return (
    <div className='DTcards'>
      <h1>Webapp Development Team</h1>
      <div className='DTcards__container'>
        <div className='DTcards__wrapper'>
          <ul className='DTcards__items'>

          <Col></Col>
                     <DTcardItem
              src={sajag}
              title= 'Leo Sajag Silwal'
              text='LCK Swoyambhu Town'
              label='Project Coordinator'
            /> 
            
            <Col></Col>

          </ul>
          <ul className='DTcards__items'>
            <DTcardItem
              src={leo}title= 'Leo Seejan Raj Mainali '
              text='Leo Club of Kathmandu Peace Eyes'
              label='Senior Developer'
              />

            <DTcardItem
              src={leo}              
              title= 'Leo Enjeela Chaudhary'
              text='Leo Club of Kathmandu Nagarjun'
              label='Backend Developer'
            
              
            /> 
                      <DTcardItem
              src={leo}
              title= 'Leo Aarush Thapa'
              text='Leo Club of Kathmandu Samakushi'
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
