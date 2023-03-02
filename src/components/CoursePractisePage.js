import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";

export default function CoursePractisePage(){
    
    const API = 'http://localhost:3001/courses/';
    const params = useParams();
    console.log("Id from params:",params.id);
    const [course,setCourse]= useState([]);
    // const navigate = useNavigate();

    const fetchDetails = () =>{
        fetch(`${API}${params.id}`)
        .then((res)=> res.json())
        .then((data) => setCourse(data)
        )
        .catch((error) => {
            console.log("Error in fetching:",error)
          });
    }
    console.log("Course: ", course)
    useEffect(()=>{
        fetchDetails()
        // .then(navigate("/courses/01"))
        
    },[]);


    
    if (!course) return <div>Loading...</div>;
    return(
        <>
        <div className="flex flex-wrap items-center my-5 p-5 rounded-xl shadow-2xl bg-white selection:bg-fuchsia-200 selection:text-fuchsia-900">
            <div className="max-w-full md:w-5/12 ml-auto mr-auto flex flex-col">
                <img src={`/images${course.imagePath}`} alt={course.title} className='object-cover object-center rounded-lg shadow-lg' />
                </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto flex flex-col">
                    <div className="md:pr-12">
                    <h3 className="text-3xl font-semibold  text-indigo-500 underline underline-offset-8 hover:text-gray-600 hover:duration-600">{course.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">{course.description}</p>
                    <ul className="list-none mt-2">
                        <li className="py-2">
                        <div className="flex items-center">
                            <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-indigo-700 mr-3"><i className="fas fa-fingerprint"></i></span></div>
                    <div><h4 className="text-slate-500">Start Date:</h4></div></div></li>
                    <li className="py-2">
                        <div className="flex items-center">
                            <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-indigo-700 mr-3"><i className="fas fa-fingerprint"></i></span></div>
                    <div><h4 className="text-slate-500">End Date:</h4></div></div></li>
                    <li className="py-2">
                        <div className="flex items-center">
                            <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-indigo-700 mr-3"><i className="fas fa-fingerprint"></i></span></div>
                    <div><h4 className="text-slate-500">Duration:{course.duration}</h4></div></div></li>
                    <li className="py-2">
                        <div className="flex items-center">
                            <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-indigo-700 mr-3"><i className="fas fa-fingerprint"></i></span></div>
                    <div><h4 className="text-slate-500">Online:{course.online ? " Yes" : " No"}</h4></div></div></li>
                    <li className="py-2">
                        <div className="flex items-center">
                            <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-indigo-700 mr-3"><i className="fas fa-fingerprint"></i></span></div>
                    <div><h4 className="text-slate-500">Normal Price:</h4></div></div></li>
                    </ul>
                    </div>
                    </div>
                    </div>
                    
        </>
    ) ;
}