import React from 'react';
import './OTCards.css';
import CDCardItem from './CDCardItems';
import { Container, Row, Col } from 'reactstrap';
let clubs = require('../../../helpers/clubs');

function CDCards() {
  return (
    <Container>
      <h1>Club Details</h1> <br/>      
        {clubs && (
          <Row>
            {clubs.clubs.map((club, i) => (
              <Col md="6" xl="4" lg="4" sm="6"  style={{marginBottom: '10px', paddingBottom:'10px'}} >
                <CDCardItem
                  // src={process.env.REACT_APP_URL + 'images/DistrictTeam/' + member.photo}
                  clubName={club.clubName}
                  charterDate={club.charterDate}
                  clubId={club.clubId}
                />
              </Col>
                ))}
          </Row>
            )}
      </Container>
  );
}

export default CDCards;
