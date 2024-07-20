import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'
export default function Header(){
    return(
  <div className='Navbar'>
       <div className='Header-section'>
        <div className='App-logo'>
          <Link to={'/'}>  <img src='/applogo.png'/></Link>
        </div>
        <ul className='header-menu'>
            <li className='nav-item'><a className="nav-links" href= "/">Home</a></li>
            <li className='nav-item'><a className="nav-links" href= "/blogs">Blogs</a></li>
            <li className='nav-item'><a className="nav-links" href= "/">Discover Froker</a></li>
   
        </ul>
        </div>
        </div>
    )
}