import React from 'react';
import './DTCards.css';
import DTcardItem from './DTCardItems';
import leo from '../../../public/images/leo.png'
import sajag from '../../../public/images/Developers/sajag.jpg'
import abhaya from '../../../public/images/Developers/Abhaya.jpg'
import ashwin from '../../../public/images/Developers/Aashwin.jpg'
import enjeela from '../../../public/images/Developers/enjeela.jpg'
import seejan from '../../../public/images/Developers/Seejan.jpg'
import arasha from '../../../public/images/Developers/Arasha.jpg'
import kopila from '../../../public/images/Developers/kopila.jpg'
import aarush from '../../../public/images/Developers/Aarush.jpg'
import sulove from '../../../public/images/Developers/sulove.jpg'
import samita from '../../../public/images/Developers/samita.jpg'

import {Col} from 'react-bootstrap'

function DTCards() {
  return (
    <div className='DTcards'>
      <h1>Developer Team</h1>
      <div className='DTcards__container'>
        <div className='DTcards__wrapper'>
          <ul className='DTcards__items'>

          <Col></Col>
                     <DTcardItem
              src={sajag}
              title= 'Leo Sajag Silwal'
              text='Leo Club of Kathmandu Swoyambhu Town'
              label='Project Coordinator'
            /> 
            
            <Col></Col>

          </ul>
          <ul className='DTcards__items'>
            <DTcardItem
              src={seejan}title= 'Leo Seejan Raj Mainali '
              text='Leo Club of Kathmandu Peace Eyes'
              label='Senior Developer'
              />

            <DTcardItem
              src={enjeela}              
              title= 'Leo Enjeela Chaudhary'
              text='Leo Club of Kathmandu Nagarjun'
              label='Backend Developer'
                      /> 
             <DTcardItem
              src={aarush}
              title= 'Leo Aarush Thapa'
              text='Leo Club of Kathmandu Samakhusi'
              label='UI/UX Developer'
            />
          </ul>
          <ul className='DTcards__items'>


            <DTcardItem
              src={ashwin}
              title= 'Leo Ashwin Khatiwada'
              text='Leo Club of Kathmandu Sahayatri'
              label='Designer'
            />
                      <DTcardItem
              src={abhaya}
              title= 'Leo Abhaya Thapa'
              text='Leo Club of Kathmandu Prayasnagar'
              label='Designer'
            /> 
                                  <DTcardItem
              src={sulove}
              title= 'Leo Sulove Malla'
              text='Leo Club of Kathmandu Himalayan town'
              label='Designer'
            /> 
          </ul>
          <ul className='DTcards__items'>
            <DTcardItem
              src={samita}
              title= 'Leo Samita Rana Magar'
              text='Leo Club of Balaju'
              label='Content Writer'
            />
            <DTcardItem
              src={kopila}
              title= 'Leo Kopila Dhungana'
              text='Leo Club of Kathmandu Chabdi Barahi'
              label='Content Writer'
            /> 
                      <DTcardItem
              src={arasha}
              title= 'Leo Arasha Maharjan'
              text='Leo Club of Kathmandu Prayasnagar'
              label='Content Writer'
            /> 
          </ul>

        </div>
      </div>
    </div>
  );
}

export default DTCards;
