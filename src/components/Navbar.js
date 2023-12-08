import React from 'react';
import './Navbar.css';


function Navbar() {

    return (
        <nav className='navbar'>
            <h1><a href='/Home' className='navbar-header'>Green Living Solutions</a></h1>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <a href='/Home' className='nav-links' >
                        Home
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='/Solutions' className='nav-links'>
                        Solutions
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='/Pricing' className='nav-links'>
                        Pricing
                    </a>
                </li>
                <li className='nav-item'>
                    <a href='/Contact' className='nav-links' >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;