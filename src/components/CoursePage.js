import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from 'react-bootstrap/Badge';


// In line 9 we will set a badge if the course is online or not
export default function CoursePage(props){


    let badgeText ;
    if(props.online){
        badgeText="Online"
    }else{
        badgeText="On site"
    }

    console.log(props)
    return (
        <>
        
        {badgeText && <div className="course--badge"><Badge bg="info">{badgeText}</Badge></div>}
        {props.title && <h3 className="course--title">{props.title}Title: Geometry</h3>}
        <hr/>
        
        {props.imagePath && props.title && <img src={props.imagePath} alt={props.title} className="course--img"/>}
        <hr/>
        <p className="course--info">
            <ul>
                <li> <FontAwesomeIcon icon="fa-calendar" /><span>Duration:{props.duration}</span></li>
                <li> <span>Start date:{props.dates.start_date}</span>-<span>End date: {props.dates.end_date}</span></li>
                <li><FontAwesomeIcon icon="fa-watch" /><span className="bold">Duration: {props.duration} 2 hours</span></li>
                <li><span>Category:{props.description} Mathematics</span></li>
                <li><span><FontAwesomeIcon icon="fa-solid fa-person-chalkboard" />Online:{props.online} True</span></li>
                <li><span><FontAwesomeIcon icon="fa-solid fa-person-chalkboard" />Early Price:€{props.price.early_bird}</span> - Normal Price:€{props.price.normal}</li>

            </ul>
        </p>
        <p className="course--description">
        {props.description}
        </p>
        <p>
            <ul>
            <button className="edit--button btn btn-secoundary">Edit</button>
                <button className="delete--button btn btn-danger">Delete</button>
            </ul>
               
        </p>
        </>
        
        )}