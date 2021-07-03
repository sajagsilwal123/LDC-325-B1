import React from 'react';
import {Table, Button, Container, Col, Row, Card,Accordion} from 'react-bootstrap';
import "./design.css"
import decYellow from "../../public/images/decoration yellow.png"


export default function ImportantDates() {
  return (
    
    <Container>
      <h1>Important Dates</h1>
      <br/>
      <br/>
      <br/>
      <Row className="justify-content-md-center">

        <Col xs lg="12" className='border-leftt'>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link}  eventKey="0">
                <h2>July</h2>
                
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <Table  variant="light" size='lg'> 

                <tbody>
                      <tr><td>July 01</td><td>Beginning of a Leo Tenure / Lion Year</td></tr>
                      <tr><td>July 30</td><td>Leo Club Advisory Panel Nomination</td></tr>
                </tbody>
              </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="1">
              <h2>August</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>August 15</td><td>Leo Club Excellence Award Application, due Leo 105</td></tr>
                  <tr><td>August 21</td><td>World Senior Citizen's Day</td></tr>
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="2">
              <h2>September</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
            <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>September 01</td><td>Multiple District Leo Club Chairman Appointment due Leo537 MD</td></tr>
                  <tr><td>September 08</td><td>International Literacy Day</td></tr>
                  <tr><td>September 10</td><td>World Suicide Prevention Day</td></tr>
                  <tr><td>September 21</td><td>World Peace Day</td></tr>
                  <tr><td>September 27</td><td>World Tourism Day</td></tr>
                  <tr><td>September 29</td><td>World Heart Day</td></tr>        
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="3">
              <h2>October</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
            <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>October</td><td>Leo Membership Growth Month</td></tr>
                  <tr><td>October 01</td><td>World Vegetarian Day</td></tr>
                  <tr><td>October 10</td><td>World Mental Health Day</td></tr>
                  <tr><td>October 11</td><td>World Sight Day</td></tr>
                  <tr><td>October 12</td><td>World Lions Service Day</td></tr>
                  <tr><td>October 15</td><td>Global Handwashing Day</td></tr>
                  <tr><td>October 16</td><td>World Food Day</td></tr>
                  <tr><td>October 24</td><td>United Nation Day</td></tr>
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="4">
              <h2>November</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
            <Table  variant="light" size='lg'> 
               <tbody>
                <tr><td>November 01</td><td>World Vegan Day</td></tr>
                <tr><td>November 14</td><td>World Diabetes Awareness Day</td></tr>
                <tr><td>November 15</td><td>Leo October Membership Growth Award Nomination due Leo101</td></tr>
               <tr><td>November 10</td><td>World Toilet Day</td></tr>                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="5">
              <h2>December</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
            <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>December 01</td><td>World AIDs Day</td></tr>
                  <tr><td>December 03</td><td>International Day of Persons with Disabilities</td></tr>
                  <tr><td>December 05</td><td>International Leo Day</td></tr>
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="6">
              <h2>January</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
            <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>January 13</td><td>Melvin Jones Day</td></tr>
                  <tr><td>January 27</td><td>World Leprosy Eradication Day</td></tr>
                  <tr><td>January 31</td><td>World Street Children's Day</td></tr>      
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="7">
              <h2>February</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
            <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>February 04</td><td>World Cancer Day</td></tr>
                  <tr><td>February 14</td><td>Valentine's Day</td></tr>
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="8">
              <h2>March</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
            <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>March 08</td><td>International Women's Day</td></tr>
                  <tr><td>March 20</td><td>World Oral Health Day</td></tr>
                  <tr><td>March 21</td><td>World Forestry Day</td></tr>
                  <tr><td>March 22</td><td>World Water Day</td></tr>
                  <tr><td>March 24</td><td>World Tuberculosis Day</td></tr>      
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="9">
              <h2>April</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
            <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>April 07</td><td>World Health Day</td></tr>
                  <tr><td>April 15</td><td>Suggest Elected Date for next year Leo Club Officers</td></tr>
                  <tr><td>April 18</td><td>World Heritage Day</td></tr>
                  <tr><td>April 22</td><td>Earth Day</td></tr>
                  <tr><td>April 29</td><td>International Dance Day</td></tr>     
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="10">
              <h2>May</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
            <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>May 05</td><td>World Laughter Day</td></tr>
                  <tr><td>May 15</td><td>Leo Club officers and Membership Report due Leo72</td></tr>
                  <tr><td>May 17</td><td>World Hypertension Day</td></tr>
                  <tr><td>May 31</td><td>World No-Tobacco Day</td></tr>     
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Link} eventKey="11">
              <h2>June</h2>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
            <Table  variant="light" size='lg'> 
               <tbody>
                  <tr><td>June 01</td><td>Leo of the Year Award Application due Leo loy</td></tr>
                  <tr><td>June 03</td><td>World Bicycle Day</td></tr>
                  <tr><td>June 05</td><td>World Environment Day</td></tr>
                  <tr><td>June 14</td><td>World Blood Donor Day</td></tr>
                  <tr><td>June 21</td><td>International Day of Yoga</td></tr>
                  <tr><td>June 27</td><td>Helen Keller Day</td></tr> 
              </tbody>
              </Table>
            </Accordion.Collapse>
          </Card>
      </Accordion>
        </Col>


      </Row>
      <br/>
      <br/>
      <br/>
    </Container>

    
  )
}
