import React from 'react';
import './OTCards.css';
import OTCardItem from './OTCardItems';
import { Container, Row, Col } from 'reactstrap';
let members = require('../../../helpers/district_board');

function OTCards() {
  return (
    <Container>
      <h1>District Board</h1> <br/>      
        {members && (
          <Row>
            {members.members.map((member, i) => (
              <Col md="6" xl="4" lg="4" sm="6"  style={{marginBottom: '10px', paddingBottom:'10px'}} >
                <OTCardItem
                  src={process.env.REACT_APP_URL + 'images/DistrictTeam/' + member.photo}
                  title={member.name}
                  text={member.homeClub}
                  label={member.designation}
                />
              </Col>
                ))}
          </Row>
            )}
      </Container>
  );
}

export default OTCards;
