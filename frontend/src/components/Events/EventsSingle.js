
import EventsCards from "./EventsCards"
import axios from "axios";
import React, {useState} from "react";

function EventSingle(props) {
    let [responseData, setResponseData] = useState("");

    const fetchData = React.useCallback(() => {
        axios({
        method: "GET",
        url: "http://localhost:5000/event/single/"+props.match.params._id,
        })
        .then((response) => {
            console.log(response.data.data);
            setResponseData(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    React.useEffect(() => {
        fetchData();
      }, [fetchData]);
  return (
    <div className="App">
        { responseData &&
            <>
            {responseData._id}<br></br>
            {responseData.eventName}<br></br>
            {responseData.eventDescription}<br></br>
            <img src={"http://localhost:5000/" + responseData.eventImage}/><br></br>
            </>
           
        }
    </div>
  );
}

export default EventSingle;
