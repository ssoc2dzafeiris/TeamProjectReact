import React from 'react';

export default function Navbar(props) {

    return (
        <nav className="navbar">
            <img src={props.logo} alt="logo"/>
            <h3>{props.title}</h3>
            <ul>
                <li>About</li>
                <li>Categories</li>
                <li>My courses</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}