import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function SearchBar(){
    const urlApi = 'http://localhost:3001/courses/';
    const [isLoading, setIsLoading] = useState(false);
    const [courses,setCourses] = useState([]);
    const [searchTitle,setSearchTitle] = useState("");


    useEffect(() => {
        const loadCourses = async () =>{
            setIsLoading(true);
            const response = await axios.get(urlApi);
            setCourses(response.data);
            setIsLoading(false);
        }
        loadCourses();
    },[])

    return(
        <div>
            <h4>Search courses</h4>
            <input type="text" placeholder="type something" onChange={(e) => setSearchTitle(e.target.value)}/>
            { isLoading ? (<div>Loading</div>) : (
            courses.filter((value) => {
                if(searchTitle === "") {
                    return value
                }else if(value.title.toLowerCase().includes(searchTitle.toLowerCase())){
                    return value
                }
            })
            .map((course) => <h3 key={course.id}>{course.title}</h3>)
            )
            }
        </div>
    )
}