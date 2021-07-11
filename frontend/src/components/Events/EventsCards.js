import React, {useState} from "react";
import "./EventsCards.css";
import EventsCardItem from "./EventsCardItems";
import { Link } from "react-router-dom";
import leo from "../../public/images/leo.png";
import Pagination from "react-js-pagination";
import axios from "axios";
import { Table } from 'reactstrap';

function EventsCards() {
  let [responseData, setResponseData] = useState("");
  const [activePage, setActivePage] = useState()


  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/event/all",
    })
      .then((response) => {
        console.log(response.data.eventData);
        setResponseData(response.data.eventData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber)
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    let t = new Date(dateString);
    return t.toLocaleDateString(undefined, options) + ' ' + t.toLocaleTimeString();
  }

  return (
    <div>
      <h1>Events</h1>
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Event Name</th>
                  <th>Event Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
            {responseData && (
              <>
                {responseData.docs.map((event, i) => (
                  <>
                    {/* <EventsCardItem
                      src={"http://localhost:5000/" + event.eventImage}
                      date={event.eventDate}
                      text={event.eventDescription}
                      title={event.eventTitle}
                      path={"event/single/" + event._id}
                    /> */}
                    <tr key={event._id}>
                      <th scope="row">{i+1}</th>
                      <td>{event.eventName}</td>
                      <td>{formatDate(event.eventDate)}</td>
                      <td> <Link to={"event/single/" + event._id}>View Event</Link></td>
                    </tr>
                  </>
                ))}
                <Pagination
                  activePage="0"
                  itemsCountPerPage={responseData.limit}
                  totalItemsCount={responseData.total}
                  pageRangeDisplayed={3}
                  onChange={handlePageChange.bind(this)}
                />
              </>
            )}
            </tbody>
            </Table>
        </div>
  );
}

export default EventsCards;
