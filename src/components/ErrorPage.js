import React from 'react';
import { Link } from 'react-router-dom';


export default function ErrorPage(){
    return(
        <div>
            <h2>404</h2>
            <p>page not found</p>
            <Link to='/'>Back to the homepage</Link>
            </div>
    )
}