import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a className='gg' href="/icon">SONGFOREST</a>
                <a href="/home">Home</a>
                <a href="/libray">Libray</a>
                <a href="/stream">Stream</a>              
            </nav>
        </div>
    );
};

export default Header;