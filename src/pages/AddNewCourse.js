import React from 'react';
import {Link} from 'react-router-dom'
import BasicForm from '../components/BasicForm';

export default function AddNewCourse(){

    return (
       <>
       
       <div className="container d-flex flex-column">
       <div className="row">
                <Link to='/' className='text-black-50 p-2 col-md-5'>Go Back</Link>
            </div>
        <h3 className="display-5 p-2 text-primary">Add new Course</h3>
        <hr/>
       <BasicForm />
       </div>
       </>
    )
}