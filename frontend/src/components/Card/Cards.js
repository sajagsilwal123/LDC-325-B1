import React, {useState} from 'react';
import axios from "axios";
import './Cards.css';
import CardItem from './CardItems';
import { Container, Row } from 'reactstrap';
function Cards() {
  let [responseData, setResponseData] = useState("");

  const fetchData = React.useCallback((p) => {
    let page = (p) ? p : 1;
    axios({
      method: "GET",
      url: `http://localhost:5000/event/dashboard/`,
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    let t = new Date(dateString);
    return t.toLocaleDateString(undefined, options) + ' ' + t.toLocaleTimeString();
  }
  if(!responseData) {
    return (
      <Container>
        <div class='text-center'>
          Loading Events...
        </div>
      </Container>
    );
    } else {
  return (
    <Container>
      <div class='text-center'>
      <h1 class='text-blue'>Our Events</h1>
      </div>
      
        <div className='cards__wrapper'>
          <Row>
          {responseData.data.map((event, i) => (
            <React.Fragment key={event._id}>
              <CardItem
              src={event.eventImage}
              date={formatDate(event.eventDate)}
              text={event.eventDescription}
              title= {event.eventName}
              path={'event/single/' + event._id }
            />
            </React.Fragment>
          ))}
          </Row>
        </div>

    </Container>
    );
  }
}

export default Cards;