import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main(props) {

    return (
        <main className="main">
            <h3 className="course--title">{props.title}Mathima 1</h3>
            <hr/>
            
            <img src="https://dummyimage.com/700x500/db14db/ffffff.png&text=dummy+picture" alt={props.title} className="course--img"/>
            <hr/>
            <p className="course--info">
                <ul>
                    <li> <FontAwesomeIcon icon="fa-calendar" /><span>Dates Available:</span></li>
                    <li><FontAwesomeIcon icon="fa-watch" /><span className="bold">{props.duration}Duration: 2 hours</span></li>
                    <li><span>{props.category}Category: Theory</span></li>
                    <li><span><FontAwesomeIcon icon="fa-solid fa-person-chalkboard" />{props.type}Type: Remote/Online</span></li>
                </ul>
                </p>
        </main>
    )
}