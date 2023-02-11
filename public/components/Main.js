import React from 'react';

export default function Main(props) {

    return (
        <main className="main">
            <h3 className="course--title">{props.title}</h3>
            <hr/>
            <img src={props.img} alt={props.title} className="course--img"/>
            <hr/>
            <p className="course--text">{props.description}</p>
            <p><span className="bold">{props.duration}</span><span>{props.category}</span><span>{props.type}</span></p>
        </main>
    )
}