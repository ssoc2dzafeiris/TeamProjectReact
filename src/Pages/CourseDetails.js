import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import LoadingSpinner from '../components/Utilities/Loaders/LoadingSpinner.js';
import Buttons from "../components/Utilities/Buttons/buttons";
import CourseDetailsItem from './../components/Utilities/Cards/CourseDetailsItem';
export default function CourseDetails(){
    const API = 'https://chain-legendary-strawflower.glitch.me/courses/';
    const params = useParams();
    const [course,setCourse]= useState(null);
    const fetchDetails = () =>{
        setTimeout(function() 
        {
            fetch(`${API}${params.id}`)
            .then((res)=> res.json())
            .then((data) => setCourse(data))
            .catch((error) => {console.log("Error in fetching:",error)});
        }, 1000);
    }
    useEffect(()=>{
        fetchDetails()
    },[]);
    
    if (!course) {
        return(<div><LoadingSpinner/></div>);
    }else{
        return(
            <>
            <div className="flex flex-wrap items-center my-5 p-5 rounded-2xl shadow-3xl bg-white selection:bg-fuchsia-200 selection:text-fuchsia-900">
                <div className="max-w-full md:w-6/12 ml-auto mr-auto flex flex-col">
                    <img src={course.imagePath ? `/images${course.imagePath}` : `/images/courses/notfound.png`} alt={course.title} className='object-cover object-center rounded-lg shadow-lg' />
                    </div>
                        <div className="w-full md:w-5/12 ml-auto mr-auto flex flex-col">
                        <div className="md:pr-12">
                        <h3 className="text-3xl font-bold text-indigo-500 underline underline-offset-8 hover:text-gray-600 hover:duration-600">{course.title}</h3>
                        <p className="mt-3 mb-3 text-lg leading-relaxed text-slate-700 border-b-2 border-gray-500 py-2 antialiased">{course.description}</p>
                        <ul className="list-none flex-wrap grid grid-cols-2 mb-3 mt-5">
                            <CourseDetailsItem heading={"Start Date"} content={course.dates.start_date.split("-").reverse().join("/")} IconTitle={"fa-solid fa-calendar-minus"}/>
                            <CourseDetailsItem heading={"End Date"} content={course.dates.end_date.split("-").reverse().join("/")} IconTitle={"fa-solid fa-calendar-plus"}/>
                            <CourseDetailsItem heading={"Duration"} content={course.duration} IconTitle={"fa-solid fa-clock"}/>
                            <CourseDetailsItem heading={"Online"} content={course.online ? "Yes" : " No"} IconTitle={"fa-solid fa-globe"}/>
                            <CourseDetailsItem heading={"Normal Price"} content={course.price.normal} IconTitle={"fa-solid fa-coins"}/>
                            <CourseDetailsItem heading={"Early-bird Price"} content={course.price.early_bird} IconTitle={"fa-solid fa-gift"}/>
                        </ul>
                        <Buttons fetchDetails={fetchDetails()} data={course} idNumber={course.id} />
                        </div>
                        </div>
                        </div>
            </>
        ) ;
    }

    
    
}