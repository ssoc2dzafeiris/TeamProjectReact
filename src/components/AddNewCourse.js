import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const AddNewCourse = () => {
    <div className="row">
    <Link to='/' className='text-black-50 p-2 col-md-5'>Go Back</Link>
</div>

    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [online, setOnline] = useState(false);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState({});
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [early_bird, setEarly_bird] = useState('');
    const [normal, setNormal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title,
            imagePath,
            price: { early_bird, normal },
            dates: { start_date, end_date },
            duration,
            online,
            description,
        };



        fetch('http://localhost:3001/courses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }
    return (
        <div className="w-5/6 mt-5 mx-auto flex justify-center items-center h-screens">
            <form onSubmit={handleSubmit} className=" max-h-90vh w-5/6 bg-white p-8 rounded-lg shadow-md overflow-y-auto ">
                <h1 className="font-extrabold font-weight: 900 text-5xl mb-8  ">Add Course</h1>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Title
                        </label>
                        <input
                            className="  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 justify-center"
                            name="title" type="text"
                            onChange={
                                (e) => setTitle((e.target.value))
                            } placeholder="Lesson"></input>
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Duration
                        </label>
                        <input
                            className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="duration" type="text" onChange={(e) => setDuration((e.target.value))} placeholder="Duration"></input>
                    </div>
                </div>
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Image Path
                </label>
                {<input
                    className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="imagePath" type="text" onChange={(e) => setImagePath((e.target.value))} placeholder="Image Path"></input>}
                <label
                    className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    online
                </label>
                <input type="checkbox" onChange={(e) => setOnline((e.target.checked))} />
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    description
                </label>
                <textarea
                    className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
                    name="description" type="text" onChange={(e) => setDescription((e.target.value))}>
                </textarea>

                <p className="font-bold font-weight: 700">Dates</p>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Start Date
                        </label>
                        <input
                            className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="start_date" type="date" onChange={(e) => setStart_date((e.target.value))}></input>
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            End Date
                        </label>
                        <input className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="end_date" type="date" onChange={(e) => setEnd_date((e.target.value))}></input>
                    </div>
                </div>
                <p className="font-bold font-weight: 700"> Price </p>

                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">


                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Early Bird
                        </label>
                        <input className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="early_bird" type="number" onChange={(e) => setEarly_bird((e.target.value))}></input>
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Normal Price
                        </label>
                        <input className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="normal" type="number" onChange={(e) => setNormal((e.target.value))}></input>
                    </div>
                </div>
                <button className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-right " type='submit'> Add Course </button>
            </form>


        </div >

    )
}

export default AddNewCourse