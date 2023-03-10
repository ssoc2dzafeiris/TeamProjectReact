import React, { useEffect,useState } from 'react';
import CourseItem from '../components/Utilities/Cards/CourseItem.js';
import CircleSpinner from './Utilities/Loaders/CircleSpinner';

export default function CourseTable({id,title,online,start_date,end_date,imagePath,duration}){
    const url = 'https://chain-legendary-strawflower.glitch.me/courses';
    const [courses,setCourses]= useState([]);

    const fetchLastCourses = () =>{
        fetch(url,{
            method: "GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            }})
        .then((response)=> response.json())
        .then((data)=> {
            const lastCourses = data.slice(-5);
            setCourses(lastCourses);});
    }

    useEffect(()=>{
        fetchLastCourses();
    },[])

    if( courses.length === 0) return <CircleSpinner />
    return(
        <>
             <table className="shadow-2xl font-[Poppins] border-2 border-indigo-200 overflow-hidden rounded-xl mt-2 mb-5 mx-auto">
                            <thead className="text-white">
                                <tr>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Title</th>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Duration</th>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Start Date</th>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        End Date</th>
                                        <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Online</th>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-indigo-800 text-center">
                                {courses.length > 0 && courses.map((item) =>{
                                     return (<CourseItem key={item.id} id={item.id} title={item.title} duration={item.duration} start_date ={item.dates.start_date} end_date={item.dates.end_date} online={item.online} />)
                                }
        
                                )}                                                           
                            </tbody>
                        </table>
        </>

    )
}