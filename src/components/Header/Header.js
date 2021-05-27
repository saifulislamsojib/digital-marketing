import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <HeaderMain />
        </header>
    );
};

export default Header;