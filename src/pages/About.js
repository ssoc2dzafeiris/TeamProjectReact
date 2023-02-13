import React from 'react';
import {Link} from 'react-router-dom'
 
export default function About(){
    return (
        <div>
            <Link to='/' className='btn'>Back to Home</Link>
            <h1>About us</h1>
            <section>
            <h3>Description project
            </h3>
            </section>
            <section>
            <h4>Our Team
            </h4>
            <p>
                <ul>
                    <li>Dimi</li>
                    <li>Nikos</li>
                    <li>Nikos</li>
                    <li>Stelios</li>
                </ul>
            </p>
            </section>  
        </div>
        )}