import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'




export default function CourseCard(props){

    const openCoursePage = ()=>{
        const course_id = props.id

    }
    let badgeText ;
    if(props.online){
        badgeText="Online"
    }else{
        badgeText="On site"
    }
    return(
        <div className="card d-flex align-items-center justify-content-center" key={props.id}>
            <div className="bg-image hover-overlay ripple m-2" data-mdb-ripple-color="light" width="50%">
                <img src="https://dummyimage.com/300x300/6a10d1/fff.jpg&text=Course" className="card-img-top" />
            </div>
            
            <div className="card-body col m-1 p-1">
            <div className="card-header">
                <h4>{props.title}</h4>
            </div>
                <ul className="">
                    {badgeText && <li className="list-group-item"><Badge bg="info">{badgeText}</Badge></li>}
                    <li className="list-group-item"><span className=""> </span> <Badge bg="warning">Only €{props.price.early_bird}</Badge></li>
                    </ul>
                    <div class="">
                    <Button variant="primary" onClick={openCoursePage}>View Details</Button>
                    <Link to="/courses/:${props.id}">View Details</Link>
            </div>
            </div>
           
        </div>
    )
}