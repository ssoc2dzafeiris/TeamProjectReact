import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import CourseCard from './CourseCard';
 
export default function Courses(){
    //Initialize important variables

    const url = "http://localhost:3001/courses";
    const [data,setData] = useState([]);

    // useEffect
    React.useEffect(function() {
        console.log("useEffect run")
        fetch(url)
            .then(res => res.json())
            .then((json)=>{
                setData(json);
                console.log(json)
            })
            .catch(error => console.log(error) );
    }, [])

    //mapping all the data and object from API
    const cards = data.map(course => {
        return (
        <CourseCard 
            key={course.id}
            {...course}
        />
        )
    })
    // and this is the view of layout of All Courses
    return (
        <div className="container">
            <div className="row">
                <Link to='/' className='text-black-50 p-2 col-md-5'>Back | <i className="fa fa-home-alt"></i></Link>
            </div>
            <div className='row'>
                <h1 className='display-6 py-1 col-md-8 text-primary'>All courses</h1>
                <div className='card-group'>
                    {cards}
                </div>
                
            </div>
        </div>
        
        )}