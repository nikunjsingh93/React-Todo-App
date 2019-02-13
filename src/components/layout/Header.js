import React from 'react';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    background: '#333',
    color: '#fff'
}

export default Header;