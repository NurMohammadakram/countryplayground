import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo-section">
                <h1 className='logo'>ShowMeCountryAss</h1>
            </div>
            <div className="searchbar">
                <form>
                    <input type="text" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="navbar-nav">
                <Link className='navlist' to='/'>Home</Link>
                <Link className='navlist' to='map'>Map</Link>
                <Link className='navlist' to='about'>About Us</Link>
                <Link className='navlist' to='contact'>Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;