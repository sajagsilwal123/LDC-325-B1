import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import lions from '../../public/images/lions.png'
import leo from '../../public/images/leo.png'
import css from './nav.css'
import { Link } from 'react-router-dom'


const Navigaiton = () => {
    return(
        <div >
         
            <Navbar variant='light' expand="lg">
                      
                      <Container className="border-yellow">
                      
                      <Navbar.Brand href="/">
                          
                      <img src={lions} className={css.logo} height="32" alt='lions logo' /> 
                      <img src={leo} height="30" style={{marginLeft:'0.5em'}} alt='leo logo'/> 
      
                      </Navbar.Brand>
                      <Navbar.Brand href="/">
                            Leo District Council 325 B1, Nepal
          
                          </Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav" className=''>

                      <Nav>
                            <Link to='/'>
                                <Nav.Link href="/" className='text-blue'>HOME</Nav.Link>
                            </Link>
                            <Nav.Link href="/Events" className='text-blue'>EVENTS</Nav.Link>

                            <NavDropdown title="ABOUT-US" id="collasible-nav-dropdown" className='text-blue'>
                                <NavDropdown.Item href="/OurTeam" className='text-blue'>Our team </NavDropdown.Item>
                                <NavDropdown.Item href="/PastLeaders" className='text-blue'>Past Leaders</NavDropdown.Item>
                                <NavDropdown.Item href="/ClubDetails" className='text-blue'>Clubs Details</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="RESOURCES" id="collasible-nav-dropdown" className='text-blue'>
                                <NavDropdown.Item href="/DistrictDirectory" className='text-blue'>District Directory</NavDropdown.Item>
                                <NavDropdown.Item href="/InternationalForms" className='text-blue'>International Forms</NavDropdown.Item>
                                <NavDropdown.Item href="/ImportantDates" className='text-blue'>Important Dates</NavDropdown.Item>
                                <NavDropdown.Item href="/LeoPledge" className='text-blue'>Leo Pledge</NavDropdown.Item>
                                <NavDropdown.Item href="/FlagSalutation" className='text-blue'>Flag Salutation</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="MoreResources" className='text-blue'>More Resources</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/enewsletter" className='text-blue'>e-NEWSLETTER</Nav.Link>

                          </Nav>
                          </Navbar.Collapse>

                      </Container>
                  </Navbar>
        </div>
    )
}

export default Navigaiton