import React from 'react';
import './PLCards.css';
import PLCardItem from './PLCardItems';
import leo from '../../../public/images/leo.png'
import aadarsha from '../../../public/images/PDP/aadarsha.jpg'
import binayak from '../../../public/images/PDP/binayak.jpg'
import bishal from '../../../public/images/PDP/bishal.jpg'
import rajendra from '../../../public/images/PDP/rajendra.jpg'
import niranjan from '../../../public/images/PDP/niranjan.jpg'
import ashok from '../../../public/images/PDP/ashok.jpg'
import tirtha from '../../../public/images/PDP/tirtha.jpg'
import prem from '../../../public/images/PDP/prem.jpg'
import biplab from '../../../public/images/PDP/biplap.jpg'


function PLCards() {
  return (
    <div className='PLcards'>
      <h1>Past District Presidents</h1>
      <div className='PLcards__container'>
        <div className='PLcards__wrapper'>
          <ul className='PLcards__items'>
            <PLCardItem
              src={aadarsha}
              title= 'Leo Aadarsha Mohan Bhattrai'
              text='Leo Club of Lekhnath'
              label='District President (2020/21)'
            />
            <PLCardItem
              src={binayak}
              title= 'Leo Binayak Poudel'
              text='Leo Club of Pokhara Lakecity'
              label='District President (2019/20)'
            />
                      <PLCardItem
              src={bishal}
              title= 'Leo Bishal Rijal'
              text='Leo Club of
              Kathmandu Balaju Height'
              label='District President (2018/19)'
            /> 
          </ul>
          <ul className='PLcards__items'>
            <PLCardItem
              src={rajendra}
              title= 'Leo Rajandra Baral'
              text='Leo Club of
              Pokhara Peace Chautari'
              label='District President (2017/18)'
            />
            <PLCardItem
              src={niranjan}
              title= 'Leo Niranjan Dangol'
              text='Past District Council President'
              label='District President (2016/17)'
            /> 
                      <PLCardItem
              src={ashok}
              title= 'Leo Ashok Paudel'
              text='Leo Club of
              Kathmandu Balaju Height'
              label='District President (2015/16)'
            /> 
          </ul>
          <ul className='PLcards__items'>
            <PLCardItem
              src={tirtha}
              title= 'Leo Tirtha Raj Khanal'
              text='Leo Club of
              Dulegauda Khaireni City'
              label='District President (2014/15)'
            />

            <PLCardItem
              src={prem}
              title= 'Leo Prem Kumar Shrestha'
              text='Leo Club of Aanbookhaireni'
              label='District President (2013/14)'
            />
                      <PLCardItem
              src={biplab}
              title= 'Leo Biplap Subedi'
              text='Leo Club of Kathmandu Balaju Height'
              label='District President (2012/13)'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PLCards;
