import React from 'react';
import './OTCards.css';
import { Link } from 'react-router-dom';
import {Row} from 'react-bootstrap'
import leo from '../../../public/images/leo.png';

function CDCardItem(props) {
  return (
    <React.Fragment>
      <li className='PLcards__item'>
      {/* clubName={club.clubName}
                  charterDate={club.charterDate}
                  clubId={club.clubId} */}
        <Link className='PLcards__item__link' to='#'>
          <figure className='PLcards__item__pic-wrap' data-category={'Club Id: ' + props.clubId}>
            <img
              className='PLcards__item__img'
              alt='Travel Image'
              src={leo}
              // onError={(e)=>{e.target.onError = null; e.target.src = leo}}
            />
          </figure>

          <Row className='PLcards__item__text py-3 px-3'>
              <h5 class="text-dark">{props.clubName}</h5>
              <h6 class='text-secondary'>
              Charter Date: {props.charterDate ? props.charterDate : '\u00A0'}
              </h6>

          </Row>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default CDCardItem;


