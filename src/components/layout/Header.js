import React from 'react';

function Header() {
    return(
        <header style={headerStyle}>
            <h2>Just a simple Todo</h2>
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    background: '#03AEB5',
    color: '#fff'
}

export default Header;