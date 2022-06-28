import React from 'react';
import Logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="React logo" className="nav--logo" />
        </nav>
    )
}