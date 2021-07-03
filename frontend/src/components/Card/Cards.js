import React from 'react';
import './Cards.css';
import CardItem from './CardItems';
import leo from '../../public/images/leo.png'
import { Container, Row } from 'react-bootstrap';

function Cards() {
  return (
    <Container>
      <div class='text-center'>
      <h1 class='text-blue'>Our Events</h1>
      </div>
      
        <div className='cards__wrapper'>
          <Row>
            
            <CardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              club='Leo Club of Kathmandu Deurali'
              title= 'Lorem ipsum'
              path=''
            />

            <CardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy '
              title= 'Lorem ipsum'
              date='12  May'
              path='/'
            />
            <CardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Dummy'
              path=''
              title= 'Lorem ipsum'
              date='12  May'
            /> 
            <CardItem
              src={leo}
              date='12  May'
              text='Lorem pislkasdjflkadf asdfkkjasdklf'
              title= 'Lorem ipsum'
              path=''
            />

            <CardItem
              src={leo}
              text='Dummy Dummy Dummy Dummy Dummy Dummy '
              title= 'Lorem ipsum'
              date='12  May'
              path=''
            />
            <CardItem
              src={leo}
              text='Dummy Dummy Dummy'
              label='Dummy'
              path=''
              title= 'Lorem ipsum'
              date='12  May'
            /> 
            </Row>
         
         
          
        </div>

    </Container>
     );
}

export default Cards;