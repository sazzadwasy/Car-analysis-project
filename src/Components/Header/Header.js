import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header p-4'>
            <Link className='header-link' to='/home'>Home</Link>
            <Link className='header-link' to='/review'>Review</Link>
            <Link className='header-link' to='/dashboard'>Dashboard</Link>
            <Link className='header-link' to='/blogs'>Blogs</Link>
            <Link className='header-link' to='/about'>About</Link>
        </div>
    );
};

export default Header;