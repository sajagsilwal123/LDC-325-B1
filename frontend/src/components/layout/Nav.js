
import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import lions from '../../public/images/lions.png'
import flag from '../../public/images/NepalFlag.png'
import leo from '../../public/images/leo.png'
import LDC325B1 from '../../public/images/LDC325B1.png'
import css from './nav.css'
import { Link } from 'react-router-dom'


class Navigaiton extends React.Component {
    render()
    
    {
          var menu =

            <div class='mb-3' >
            <Container>
              Leo District Council 325 B1, Nepal
            </Container>
            <Navbar variant='light' expand="lg"  style={{paddingTop:'0'}}>
                      <Container className="border-yellow" style={{marginTop:'0'}} >  
                      <Navbar.Brand href="/">
                        <img src={flag} className={css.logo} height="40" alt='lions logo' />     
                        <img src={lions} className={css.logo} height="40" style={{marginLeft:'0.4em'}} alt='lions logo' /> 
                        <img src={leo} height="40" style={{marginLeft:'0.4em'}} alt='leo logo'/> 
                        <img src={LDC325B1} height="35" style={{marginLeft:'0.4em'}} alt='leo logo'/>

                      </Navbar.Brand>

                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav" className=''>

                      <Nav>
                            <Link to='/'>
                                <Nav.Link href="/" className='text-blue'>HOME</Nav.Link>
                            </Link>
                            <NavDropdown title="ABOUT-US" id="collasible-nav-dropdown" className='text-blue'>
                                <NavDropdown.Item href="/OurTeam" className='text-blue'>Our team </NavDropdown.Item>
                                <NavDropdown.Item href="/PastLeaders" className='text-blue'>Past Leaders</NavDropdown.Item>
                                <NavDropdown.Item href="/ClubDetails" className='text-blue'>Clubs Details</NavDropdown.Item>
                                <NavDropdown.Item href="/DeveloperTeam" className='text-blue'>Developer Team</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/AboutLeo" className='text-blue'>About US</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="/Events" className='text-blue'>EVENTS</Nav.Link>
                            <NavDropdown title="RESOURCES" id="collasible-nav-dropdown" className='text-blue'>
                                <NavDropdown.Item href="/ImportantDates" className='text-blue'>Important Dates</NavDropdown.Item>                           
                                <NavDropdown.Item href="/enewsletter" className='text-blue'>e-NewsLetter</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="MoreResources" className='text-blue'>More Resources</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/DonateNow" className='text-blue'>DONATE NOW</Nav.Link>

                          </Nav>
                          </Navbar.Collapse>

                      </Container>
                  </Navbar>
        </div>

        


    
    return(
      
      <div>{menu}</div> 
    )
}
}

//training manual
//<NavDropdown.Item href="/LeoManual" className='text-blue'>Training Manual</NavDropdown.Item>
//Directory
//<NavDropdown.Item href="/DistrictDirectory" className='text-blue'>District Directory</NavDropdown.Item>


export default Navigaiton