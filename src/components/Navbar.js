import React from 'react';

export default function Navbar(props) {

    return (
        <nav className="navbar">
            <img src={props.logo} alt="logo"/>
            <h3>{props.title}</h3>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">My courses</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}