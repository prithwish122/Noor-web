import React from "react";
// import {Routes, Route , Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../components/Navbar.css';
import Logo from '../components/Logo.png';
// import Profile from "./Profile";


function Navbar() { 
    return(
        
            <nav className="navbar">
                    <a href="/" className="title"> 
                    {/* // eslint-disable-next-line */}

                    <img  class="title" src={Logo}  alt="" />
                    </a>
                    <div className="menu">
                        <ul className="menu-items">
                            <li>
                            <a className="a" to="/">About</a>
                            </li>
                            <li>
                            <a to="/Profile">Profile</a>
                            </li>
                        </ul>
                        {/* <Switch> */}
                        {/* <Routes> */}
                                {/* <Route path="/"/> */}
                                    {/* <About /> */}
                                    
                                
                                {/* <Route path="/Profile"/> */}
                                    {/* <Profile/> */}
                                
                        {/* </Routes>
                        </Switch> */}


                        

                    </div>
            </nav>
        
    )
}

export default Navbar;
