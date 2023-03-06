import React from 'react';
import {Link} from 'react-router-dom';
import TeamSection from './Team';

export default function About(){
    return(
        <div className="container mt-2 bg-white text-slate-700 flex flex-wrap items-center px-5 mx-auto">
             <div className="flex flex-col">
                <Link to='/' className='text-black-50 px-2 col-md-5'>Back | <i className="fa fa-home-alt"></i></Link>
            </div>
            <section className='flex flex-col'>
            <h1>About our project</h1>
            <p>
                Στα πλαίσια του προγράμματος Start School of Code της Socialinov Front End Development, στην ομάδα μας τέθηκε ως εργασία η εξής εργασία¨
                <br/>
                <ul>
                    <li></li>
                </ul>
                </p>
            </section>
           
            <TeamSection />
            </div>
    )
}