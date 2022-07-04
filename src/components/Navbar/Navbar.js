import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div class="navbar-container">
            <ul class="navbar-tabs">
                <li class="navbar-tab"><a href="/home">Home</a></li>
                <li class="navbar-tab"><a href="/">About</a></li>
                <li class="navbar-tab"><a href="/">Project</a></li> 
            </ul>
        </div>
    )
}