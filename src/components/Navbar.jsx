import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Email from '@material-ui/icons/Email';
import { Phone } from '@material-ui/icons';
const logo = require('assets/images/company-logo-white.png');

const Navbar = (props) => {
    return ( 
        <nav className="main-nav">
            <img src={logo} alt="logo"/>
            <ul>
                <li> <Phone fontSize="small" className="mx-2 mb-2" /> <span>+248 348 7000</span> </li>
                <li className="mb-0"> <Email fontSize="small" className="mx-2" /> <span>seychelles@h-hotel.com</span> </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;