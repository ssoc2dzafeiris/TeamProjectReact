import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";

export default function CoursePractisePage(){
    const urlParams = useParams();
    const [course,setCourse]= useState({
        id : ' ',
        title: ' '
    });

    useEffect(()=>{
        fetch(`"http://localhost:3001/courses/1"`)
        .then((res)=> res.json())
        .then((data) =>{
            setCourse(data);
            console.log(data);
        });
    },[urlParams.id]);

    return(
        <>
        <ul>
            <div>
                {course.length && course.map((item) =>{ <li>{course.title}</li>})}
            </div>
      </ul>
        </>
    ) ;
}