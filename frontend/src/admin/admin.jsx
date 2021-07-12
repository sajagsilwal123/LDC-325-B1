import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

class Admin extends React.Component {

    logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('userType')
        localStorage.removeItem('id')
        localStorage.removeItem('fullname')
        localStorage.removeItem('userdetails')
        window.location.href = '/'
    }

render () {
    if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin') {
        return (
                <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/admin/createevent" className='text-blue'>Create Event</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin/ourteams" className='text-blue'>Team Details</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin/club" className='text-blue'>Clubs Details</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/" className='text-blue' onClick={this.logout}>Logout</NavLink>
                        </NavItem>
                        
                    </Nav>
                </Navbar>
                </div>
            )
    } else {
        return window.location.href = "/login"
    }
}
}

export default Admin;
