import React, {useState} from "react";
import "./EventsCards.css";
import EventsCardItem from "./EventsCardItems";
import { Link } from "react-router-dom";
import leo from "../../public/images/leo.png";
import axios from "axios";
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function EventsCards() {
  let [responseData, setResponseData] = useState("");
  const [activePage, setActivePage] = useState();


  const fetchData = React.useCallback((p) => {
    let page = (p) ? p : 1;
    axios({
      method: "GET",
      url: `http://localhost:5000/event/all/${page}`,
    })
      .then((response) => {
        setResponseData(response.data.eventData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  const handlePageChange = (pageNumber) => {
    fetchData(pageNumber)
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    let t = new Date(dateString);
    return t.toLocaleDateString(undefined, options) + ' ' + t.toLocaleTimeString();
  }

  if(!responseData.docs || !responseData.page) {
    return (
      <div>
      <h1>Events</h1>
      Loading...
      </div>
    );
  } else {
    console.log(responseData, 'rd')
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
                      <tr key={event._id}>
                        <th scope="row">{i+1}</th>
                        <td>{event.eventName}</td>
                        <td>{formatDate(event.eventDate)}</td>
                        <td> <Link to={"event/single/" + event._id}>View Event</Link></td>
                      </tr>
                    </>
                  ))}
                </>
              )}
              { responseData.pages > 1 &&
                <Pagination>
                  <PaginationItem disabled={(responseData.page == 1)? 'disabled' : ''}>
                    <PaginationLink first onClick={() =>  handlePageChange(1)} 
                    />
                  </PaginationItem>
                  <PaginationItem disabled={(responseData.page == 1)? 'disabled' : ''}>
                    <PaginationLink previous onClick={() =>  handlePageChange(parseInt(responseData.page) - 1)} 
                    />
                  </PaginationItem>
                  <PaginationItem disabled={(responseData.page == responseData.pages)? 'disabled' : ''}>
                    <PaginationLink next onClick={() =>  handlePageChange(parseInt(responseData.page) + 1)} 
                    />
                  </PaginationItem>
                  <PaginationItem disabled={(responseData.page == responseData.pages)? 'disabled' : ''}>
                    <PaginationLink last onClick={() =>  handlePageChange(responseData.pages)} 
                    />
                  </PaginationItem>
                </Pagination>
              }
              </tbody>
              </Table>
          </div>
    )
  }
}

export default EventsCards;
