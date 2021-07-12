import React from 'react';
import './CDCards.css';
import CDCardItem from './CDCardItems';
import { Link } from "react-router-dom";
// import leo from "../../public/images/leo.png";
import Pagination from "react-js-pagination";
import axios from "axios";

function CDCards() {
  let [responseData, setResponseData] = React.useState("");
  const [activePage, setActivePage] = React.useState()


  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/message/all",
    })
      .then((response) => {
        console.log(response.data.productData);
        setResponseData(response.data.productData);
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
    <div className="CDCards">
      <h1>Club Details</h1>
      <div className="CDcards__container">
        <div className="CDcards__wrapper">
          <ul className="CDcards__items row">
            {responseData && (
              <>
                {responseData.map((cards, i) => (
                  <>
                    <CDCardItem
                      src={"http://localhost:5000/" + cards.image}
                      date={cards.topic}
                      text={cards.description}
                      path={"card/single/" + cards._id}
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

export default CDCards;
