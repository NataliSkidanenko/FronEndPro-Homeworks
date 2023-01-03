import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <>
            <header className="header">
                <p>{props.text}</p>
            </header>
        </>
    );
}

export default Header;
