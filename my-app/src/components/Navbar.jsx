import React,{useState} from "react";
import {Link} from 'react-router-dom';
import '../components/Navbar.css';
import Logo from '../components/Logo.png';

function Navbar() {
    return(
        
            <nav className="navbar">
                    <a href="/" className="title">
                    <img  class="title" src={Logo}/>
                    </a>
                    <div className="menu">
                        <ul className="menu-items">
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#profile">Profile</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        
    )
}

export default Navbar;