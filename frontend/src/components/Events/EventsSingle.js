
import EventsCards from "./EventsCards"
import axios from "axios";
import React, {useState} from "react";
import renderHTML from 'react-render-html';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

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

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        let t = new Date(dateString);
        return t.toLocaleDateString(undefined, options) + ' ' + t.toLocaleTimeString();
    }
    
return (
    <div className="App">
        { responseData &&
            <>
            <h1>{responseData.eventName}</h1> <br/>
            <h5>{formatDate(responseData.eventDate)}</h5>
            <Card>
                <CardImg top width="100%" src={"http://localhost:5000/" + responseData.eventImage} alt="Card image cap" />
                    <CardBody>
                        <CardText>{renderHTML(responseData.eventDescription)}</CardText>
                    </CardBody>
            </Card>
            <br/>
            </>
        }
    </div>
);
}

export default EventSingle;
