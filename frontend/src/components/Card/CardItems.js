import React from 'react';
import { Link } from 'react-router-dom';
import leo from '../../public/images/leo.png'
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

import './Cards.css';

function CardItem(props) {
  return (
    <Col sm={4} className='mt-4'>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 color">{props.date}</CardSubtitle>
        </CardBody>
        <img 
          width="100%" 
          src={'http://localhost:5000/' + props.src} 
          onError={(e)=>{e.target.onError = null; e.target.src = leo}}
        />
        <CardBody>
          {/* <CardText>{props.text}</CardText> */}
          <CardLink><Link to={props.path} target="_blank">View Details</Link></CardLink>
        </CardBody>
      </Card>
    </Col>
  );
}

export default CardItem;