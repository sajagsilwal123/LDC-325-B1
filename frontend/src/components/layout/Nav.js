
import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import lions from '../../public/images/lions.png'
import flag from '../../public/images/NepalFlag.png'
import leo from '../../public/images/leo.png'
import LDC325B1 from '../../public/images/LDC325B1.png'
import css from './nav.css'
import { Link } from 'react-router-dom'


class Navigaiton extends React.Component {
      
 
  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    localStorage.removeItem('id')
    localStorage.removeItem('fullname')
    localStorage.removeItem('userdetails')
    window.location.href = '/'
  }
    render()
    
    {
        
        if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {
            var menu =

            <div class='mb-3' >
         
            <Navbar variant='light' expand="lg">
                      
                      <Container className="border-yellow">
                      
                      <Navbar.Brand href="/">
                        <img src={flag} className={css.logo} height="40" alt='lions logo' />     
                        <img src={lions} className={css.logo} height="40" style={{marginLeft:'0.4em'}} alt='lions logo' /> 
                        <img src={leo} height="40" style={{marginLeft:'0.4em'}} alt='leo logo'/> 
                        <img src={LDC325B1} height="35" style={{marginLeft:'0.4em'}} alt='leo logo'/>

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
                            <NavDropdown title="ABOUT-US" id="collasible-nav-dropdown" className='text-blue'>
                                <NavDropdown.Item href="/ourteams" className='text-blue'>Our team </NavDropdown.Item>
                                <NavDropdown.Item href="/PastLeaders" className='text-blue'>Past Leaders</NavDropdown.Item>
                                <NavDropdown.Item href="/club" className='text-blue'>Clubs Details</NavDropdown.Item>
                                <NavDropdown.Item href="/DeveloperTeam" className='text-blue'>Developer Team</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="/createevent" className='text-blue'>CREATE EVENTS</Nav.Link>
                            <NavDropdown title="RESOURCES" id="collasible-nav-dropdown" className='text-blue'>
                                <NavDropdown.Item href="/DistrictDirectory" className='text-blue'>District Directory</NavDropdown.Item>
                                <NavDropdown.Item href="/ImportantDates" className='text-blue'>Important Dates</NavDropdown.Item>
                                <NavDropdown.Item href="/LeoManual" className='text-blue'>Training Manual</NavDropdown.Item>
                                <NavDropdown.Item href="/FlagSalutation" className='text-blue'>Flag Salutation</NavDropdown.Item>
                                <NavDropdown.Item href="/enewsletter" className='text-blue'>e-NewsLetter</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="MoreResources" className='text-blue'>More Resources</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/DonateNow" className='text-blue'>Pay with eSewa</Nav.Link>
                            <Nav.Link to="/logout" className='text-blue' onClick={this.logout}>LOGOUT</Nav.Link>

                          </Nav>
                          </Navbar.Collapse>

                      </Container>
                  </Navbar>
        </div>
        }
        else 
        {

           menu =

            <div class='mb-3' >
         
            <Navbar variant='light' expand="lg">
                      
                      <Container className="border-yellow">
                      
                      <Navbar.Brand href="/">
                        <img src={flag} className={css.logo} height="40" alt='lions logo' />     
                        <img src={lions} className={css.logo} height="40" style={{marginLeft:'0.4em'}} alt='lions logo' /> 
                        <img src={leo} height="40" style={{marginLeft:'0.4em'}} alt='leo logo'/> 
                        <img src={LDC325B1} height="35" style={{marginLeft:'0.4em'}} alt='leo logo'/>

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
                            <NavDropdown title="ABOUT-US" id="collasible-nav-dropdown" className='text-blue'>
                                <NavDropdown.Item href="/OurTeam" className='text-blue'>Our team </NavDropdown.Item>
                                <NavDropdown.Item href="/PastLeaders" className='text-blue'>Past Leaders</NavDropdown.Item>
                                <NavDropdown.Item href="/ClubDetails" className='text-blue'>Clubs Details</NavDropdown.Item>
                                <NavDropdown.Item href="/DeveloperTeam" className='text-blue'>Developer Team</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="/Events" className='text-blue'>EVENTS</Nav.Link>
                            <NavDropdown title="RESOURCES" id="collasible-nav-dropdown" className='text-blue'>
                                <NavDropdown.Item href="/DistrictDirectory" className='text-blue'>District Directory</NavDropdown.Item>
                                <NavDropdown.Item href="/ImportantDates" className='text-blue'>Important Dates</NavDropdown.Item>
                                <NavDropdown.Item href="/LeoManual" className='text-blue'>Training Manual</NavDropdown.Item>
                                <NavDropdown.Item href="/FlagSalutation" className='text-blue'>Flag Salutation</NavDropdown.Item>
                                <NavDropdown.Item href="/enewsletter" className='text-blue'>e-NewsLetter</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="MoreResources" className='text-blue'>More Resources</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/DonateNow" className='text-blue'>Pay with eSewa</Nav.Link>
                            {/* <Nav.Link href="/login" className='text-blue'>Login/Register</Nav.Link> */}

                          </Nav>
                          </Navbar.Collapse>

                      </Container>
                  </Navbar>
        </div>

        }


    
    return(
      
      <div>{menu}</div> 
     
    )
}

}

export default Navigaiton