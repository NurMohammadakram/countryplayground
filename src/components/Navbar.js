import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavComponent = () => {
    return (
        <Navbar bg='primary' expand="xl" variant='dark'>
            <div className="logo-section">
                <h2 className='lg pe-2 py-2 mb-0'>ShowCountry</h2>
            </div>
            <div className="searchbar mx-lg-5 pe-2">
                <form>
                    <input type="text" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <Navbar.Toggle aria-controls="navbarcontent" className='text-white' />

            <Navbar.Collapse id='navbarcontent'>
                <Nav className="ms-auto mb-2 mb-lg-0">
                    <NavLink className='nvStyle' to='home'>Home
                    </NavLink>
                    <Link className='nvStyle' to='map'>Map</Link>
                    <Link className='nvStyle' to='about'>About Us</Link>
                    <Link className='nvStyle' to='contact'>Contact Us</Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavComponent;