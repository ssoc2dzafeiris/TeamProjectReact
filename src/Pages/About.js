import React from 'react';
import TeamSection from '../components/Others/Team';

export default function About(){
    return(
        <div className="container mt-5 bg-white text-slate-700 flex flex-wrap items-center px-4 mx-auto rounded-lg content-between">
            <section className='bg-white flex flex-col py-1 mb-2'>
            <h1 className='text-3xl font-extrabold text-indigo-600 pt-4 pl-6'>| About our project</h1>
            <div className='pl-6 pt-4 font-normal text-slate-700 text-xl'>
                <p>This project was created as part of <span className='text-red-600 font-semibold text-2xl'>START School of Code's</span> cirriculum. </p>
                <p className='tracking-wide'>It demonstrates our ability to use <span className="text-indigo-600 font-semibold text-2xl">React</span> and its various modules such as <span className="text-purple-600 font-semibold text-xl">Axios.js/Fetch</span> for API calls and <span className="text-pink-600 font-semibold text-xl">React-Router</span> for turning a <strong>SPA</strong> to a fully functioning multi-page application.
                For styling, we opted into using <span className="text-blue-500 font-semibold text-xl">TailwindCSS</span> for it's flexiblity when building elements, the lightweight nature of it and the complexity it allowed for our elements to have.</p>
                <p>Check out for more at <a className="text-gray-500 hover:duration-200 hover:underline" href="https://github.com/zafeirisdimi/TeamProjectReact"><strong>Github</strong></a>.</p>
            </div>
            </section>
            <TeamSection />
            </div>
    )
}