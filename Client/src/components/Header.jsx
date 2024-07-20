import React from 'react';
import './header.css';
export default function Header(){
    return(
  <div className='Navbar'>
       <div className='Header-section'>
        <div className='App-logo'>
            <img src='/applogo.png'/>
        </div>
        <ul className='header-menu'>
            <li className='nav-item'><a className="nav-links" href= "/">Home</a></li>
            <li className='nav-item'><a className="nav-links" href= "/">Blogs</a></li>
            <li className='nav-item'><a className="nav-links" href= "/">Discover Froker</a></li>
   
        </ul>
        </div>
        </div>
    )
}