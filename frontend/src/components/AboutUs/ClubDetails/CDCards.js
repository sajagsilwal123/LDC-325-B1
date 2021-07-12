import React from 'react';
import './CDCards.css';
import CDCardItem from './CDCardItems';
import { Link } from "react-router-dom";
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from "axios";

function CDCards() {
  let [responseData, setResponseData] = React.useState("");
  const [activePage, setActivePage] = React.useState()


  const fetchData = React.useCallback((p) => {
    let page = (p) ? p : 1;
    axios({
      method: "GET",
      url: `http://localhost:5000/message/all/${page}`,
    })
      .then((response) => {
        console.log(response.data.clubData);
        setResponseData(response.data.clubData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData(1);
  }, [fetchData]);
  const handlePageChange = (pageNumber) => {
    fetchData(pageNumber);
  }
  
  if(!responseData.docs || !responseData.page) {
    return (
      <div>
      <h1>Events</h1>
      Loading...
      </div>
    );
  } else {
    return (
      <div>
        <h1>Club Details</h1>
              <Table bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Club Name</th>
                    <th>Club Address</th>
                    <th>Email</th>
                    <th>Contact Person</th>
                    <th>Contact Number</th>
                    <th>Members</th>
                  </tr>
                </thead>
              <tbody>
              {responseData && (
                <>
                  {responseData.docs.map((club, i) => (
                    <>
                      <tr key={club._id}>
                        <th scope="row">{i+1}</th>
                        <td>{club.name}</td>
                        <td>{club.address}</td>
                        <td>{club.email}</td>
                        <td>{club.contactPerson}</td>
                        <td>{club.contactNumber}</td>
                        <td>{club.members}</td>
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
    );
  }
}

export default CDCards;
