import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import DropdownAboutUs from './DropdownAboutUs';
import DropdownResources from './DropdownResources'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //////dropdowns
  const [dropdownAboutUs, setDropdownAboutUs] = useState(false);
  const [dropdownResources, setDropdownResources] = useState(false);

const onMouseEnterAboutUs = () => {
    if (window.innerWidth < 960) {
      setDropdownAboutUs(false);
    } else {
      setDropdownAboutUs(true);
    }
  };

const onMouseLeaveAboutUs = () => {
    if (window.innerWidth < 960) {
      setDropdownAboutUs(false);
    } else {
      setDropdownAboutUs(false);
    }
  };

  const onMouseEnterResources = () => {
    if (window.innerWidth < 960) {
      setDropdownResources(false);
    } else {
      setDropdownResources(true);
    }
  };

  const onMouseLeaveResources = () => {
    if (window.innerWidth < 960) {
      setDropdownResources(false);
    } else {
      setDropdownResources(false);
    }
  };



  
const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Leo District Council 325 B1
       
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>

            <li className='nav-item'>
                <div class="dropdown">
                  <button class="dropbtn">Resources</button>
                    <div class="dropdown-content">
                      
                      <Link
                          to='/AboutUs'
                          className='drp-links'
                          onClick={closeMobileMenu}>
                          District Directory
                      </Link>
                      <Link
                          to='/AboutUs'
                          className='drp-links'
                          onClick={closeMobileMenu}>
                          Leo Pledge
                      </Link>
                      <Link
                          to='/AboutUs'
                          className='drp-links'
                          onClick={closeMobileMenu}>
                          National Flag Salutation
                      </Link>
                      <Link
                          to='/AboutUs'
                          className='drp-links'
                          onClick={closeMobileMenu}>
                          Award Criteria
                      </Link>
                      <Link
                          to='/AboutUs'
                          className='drp-links'
                          onClick={closeMobileMenu}>
                          International Grants
                      </Link>
                      <Link
                          to='/AboutUs'
                          className='drp-links'
                          onClick={closeMobileMenu}>
                          District Banner
                      </Link>

                    </div>
                </div>
            </li>
            <li className='nav-item'>
                <div class="dropdown">
                  <button class="dropbtn">About Us</button>
                    <div class="dropdown-content">
                      
                      <Link
                          to='/AboutUs'
                          className='drp-links'
                          onClick={closeMobileMenu}>
                          Our Team
                      </Link>
                      <Link
                          to='/AboutUs'
                          className='drp-links'
                          onClick={closeMobileMenu}>
                          Past Leaders
                      </Link>
                      <Link
                          to='/AboutUs'
                          className='drp-links'
                          onClick={closeMobileMenu}>
                          Club Details
                      </Link>
                    </div>
                </div>
            </li>


            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
