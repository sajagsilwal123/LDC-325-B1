import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import {Link, Route, Switch} from 'react-router-dom';
import { Navbar,NavDropdown, Nav } from 'react-bootstrap';




function NavigationBar() {

  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="/leo-logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"

      />
    </Navbar.Brand>
  </Navbar>
  <Navbar.Brand href="/">Leo District Council 325 B1, Nepal </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
      <Nav.Link href="/Home" className='text-blue'>Home</Nav.Link>
      <Nav.Link href="/Events" className='text-blue'>Events</Nav.Link>
      <NavDropdown title="Resources" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/DistrictDirectory">District Directory</NavDropdown.Item>
        <NavDropdown.Item href="/InternationalForms">International Forms</NavDropdown.Item>
        <NavDropdown.Item href="/ImportantDates">Important Dates</NavDropdown.Item>
        <NavDropdown.Item href="/LeoPledge">Leo Pledge</NavDropdown.Item>
        <NavDropdown.Item href="/FlagSalutation">Flag Salutation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="MoreResources">More Resources</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="About Us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/OurTeam">Our team </NavDropdown.Item>
        <NavDropdown.Item href="/PastLeaders">Past Leaders</NavDropdown.Item>
        <NavDropdown.Item href="/ClubDetails">Clubs Details</NavDropdown.Item>

      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" className='text-blue'>e-Newsletter</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavigationBar;


