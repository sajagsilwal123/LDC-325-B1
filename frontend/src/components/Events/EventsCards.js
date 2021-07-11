import React, {useState} from "react";
import "./EventsCards.css";
import EventsCardItem from "./EventsCardItems";
import { Link } from "react-router-dom";
import leo from "../../public/images/leo.png";
import Pagination from "react-js-pagination";
import axios from "axios";

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
 
  return (
    <div className="EventsCards">
      <h1>Events</h1>
      <div className="EventsCards__container">
        <div className="EventsCards__wrapper">
          <ul className="EventsCards__items row">
            {responseData && (
              <>
                {responseData.map((event, i) => (
                  <>
                    <EventsCardItem
                      src={"http://localhost:5000/" + event.eventImage}
                      date={event.eventFee}
                      text={event.eventDescription}
                      title={event.eventTitle}
                      path={"event/single/" + event._id}
                    />
                  </>
                ))}

                <Pagination
                  activePage="0"
                  itemsCountPerPage={10}
                  totalItemsCount={450}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange.bind(this)}
                />
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventsCards;
