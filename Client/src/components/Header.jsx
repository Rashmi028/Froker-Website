import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='Navbar'>
            <div className='Header-section'>
                <div className='App-logo'>
                    <Link to='/'><img src='/applogo.png' alt='logo' /></Link>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className='nav-item'><Link className="nav-links" to="/">Home</Link></li>
                    <li className='nav-item'><Link className="nav-links" to="/blogs">Blogs</Link></li>
                    <li className='nav-item'><Link className="nav-links" to="/froker">Discover Froker</Link></li>
                </ul>
                <div className="nav-icon" onClick={toggleMenu}>
            <img src="/nav-icon.svg" alt="open" style={{ width: '100%' }} />
        </div>
            </div>
        </div>
    );
}
