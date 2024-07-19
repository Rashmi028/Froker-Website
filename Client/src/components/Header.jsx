import React from 'react';
import './header.css';
export default function Header(){
    return(
       <section className='Header-section'>
        <div className='App-logo'>
            <img src='/applogo'/>
        </div>
        <ul className='header-menu'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Blogs</li>
            <li className='nav-item'>Discover Forker</li>

        </ul>
        </section>
    )
}