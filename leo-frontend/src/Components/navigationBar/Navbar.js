import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to= '/' className='navbar-logo'>
                        TRVL <i className= 'fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                                    About us
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                                    Club Details
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                                    Our Team
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                                    Past Leaders
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                                    Resources
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline'>Admin Login</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
