import React from 'react';
import {Link} from 'react-router-dom';
import TeamSection from '../components/Others/Team';

export default function About(){
    return(
        <div className="container mt-5 bg-white text-slate-700 flex flex-wrap items-center px-5 mx-auto rounded-lg">
            <section className='flex flex-col'>
            <h1 className='text-3xl font-extrabold text-indigo-600 pt-4 pl-6'>About our project</h1>
            <div className='pl-6 pt-4 font-medium'>
                This project was created as part of START School of Code's cirriculum. <br />
                It demonstrates our ability to use React and its various modules such as Axios.js for API calls and react-router for turning a SPA to a fully functioning multi-page application.
                For styling, we opted into using TailwindCSS for it's flexiblity when building elements, the lightweight nature of it and the complexity it allowed for our elements to have.

            </div>
            </section>
           
            <TeamSection />
            </div>
    )
}