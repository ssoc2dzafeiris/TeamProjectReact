import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import LoadingSpinner from '../components/Utilities/Loaders/LoadingSpinner.js';
import Buttons from "../components/Utilities/Buttons/buttons";
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
                            <li className="py-2 flex flex-col">
                                <div className="flex items-center">
                                <div><span className="text-normal font-normal inline-block py-1 px-2 rounded-full text-slate-100 bg-indigo-600 mr-3"><i className="fa-solid fa-calendar-minus"></i></span></div>
                                <div><h4 className="text-slate-600 hover:text-indigo-500 font-normal hover:underline text-normal">Start Date:<span>{course.dates.start_date.split("-").reverse().join("/")}</span></h4></div></div>
                            </li>
                        <li className="py-2 flex flex-col">
                            <div className="flex items-center">
                                <div><span className="text-normal font-normal inline-block py-1 px-2 rounded-full text-slate-100 bg-indigo-600 mr-3"><i className="fa-solid fa-calendar-plus"></i></span></div>
                        <div><h4 className="text-slate-600 hover:text-indigo-500 font-normal hover:underline text-normal">End Date:<span>{course.dates.end_date.split("-").reverse().join("/")}</span></h4></div></div></li>
                        <li className="py-2 flex flex-col">
                            <div className="flex items-center">
                                <div><span className="text-normal font-normal inline-block py-1 px-2 rounded-full text-slate-100 bg-indigo-600 mr-3"><i className="fa-solid fa-clock"></i></span></div>
                        <div><h4 className="text-slate-600 hover:text-indigo-500 font-normal hover:underline text-normal">Duration:<span>{course.duration}</span></h4></div></div></li>
                        <li className="py-2 flex flex-col">
                            <div className="flex items-center">
                                <div><span className="text-normal font-normal inline-block py-1 px-2 rounded-full text-gray-100 bg-indigo-600 mr-3"><i className="fa-solid fa-globe"></i></span></div>
                        <div><h4 className="text-slate-600 hover:text-indigo-500 font-normal hover:underline text-normal">Online:<span>{course.online ? "Yes" : " No"}</span></h4></div></div></li>
                        <li className="py-2 flex flex-col">
                            <div className="flex items-center">
                                <div><span className="text-normal font-normal inline-block py-1 px-2 rounded-full text-slate-100 bg-indigo-600 mr-3"><i className="fa-solid fa-coins"></i></span></div>
                        <div><h4 className="text-slate-600 hover:text-indigo-500 font-normal hover:underline text-normal">Normal Price:<span>{course.price.normal}</span></h4></div></div></li>
                        <li className="py-2 flex flex-col">
                            <div className="flex items-center">
                                <div><span className="text-normal font-normal inline-block py-1 px-2 rounded-full text-slate-100 bg-indigo-600 mr-3"><i className="fa-solid fa-gift"></i></span></div>
                        <div><h4 className="text-slate-600 hover:text-indigo-500 font-normal hover:underline text-normal">Early-bird Price:<span>{course.price.early_bird}</span></h4></div></div></li>
                        </ul>
                        <Buttons fetchDetails={fetchDetails()} data={course} idNumber={course.id} />
                        </div>
                        </div>
                        </div>
            </>
        ) ;
    }

    
    
}