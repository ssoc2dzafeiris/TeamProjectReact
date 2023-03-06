import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CardsItem from '../components/Utilities/Cards/CardsItem';
import CoursesLoading from '../components/Utilities/Loaders/CoursesLoading';

const Cards = () => {
    const [data, setData] = useState([]);
    const [coursesLoading, setCoursesLoading] = useState(true)
  
    useEffect(() => {
        axios.get("https://chain-legendary-strawflower.glitch.me/courses")
        .then(res => {
        setCoursesLoading(false)
        setData(res.data);
          })
    }, []);

  return (
    <div className='flex items-center justify-center flex-wrap text-indigo-600 px-5 py-4 mx-auto'>
        {coursesLoading ? <CoursesLoading /> : data.map((courses) => 
            <CardsItem key={courses.id}
                id={courses.id}
                title={courses.title}
                imagePath={courses.imagePath}
                price={courses.price}
                dates={courses.dates}
                duration={courses.duration}
                online={courses.online}
            />
        )}
    </div>
  )
}

export default Cards