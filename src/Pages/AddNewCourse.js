import React, { useState,useRef,useEffect} from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom'
import axios from "axios";


const AddNewCourse = () => {

    const formRef = useRef(null);
    const navigate = useNavigate();

    <div className="row">
        <Link to='/' className='text-black-50 p-2 col-md-5'>Go Back</Link>
    </div>

    const location = useLocation();
    
    const { from, data, idNumber} = location.state;

    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [online, setOnline] = useState(false);
    const [description, setDescription] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [early_bird, setEarly_bird] = useState('');
    const [normal, setNormal] = useState('');
    const [showAlert, setShowAlert] = useState(false);


    const updateFormData = () => {
        setTitle(data.title);
        setDuration(data.duration);
        setImagePath(data.imagePath);
        setOnline(data.online);
        setDescription(data.description);
        setStart_date(data.dates.start_date);
        setEnd_date(data.dates.end_date);
        setEarly_bird(data.price.early_bird);
        setNormal(data.price.normal);

   }
 
   const deleteFormData = () => {
        setTitle('');
        setDuration('');
        setImagePath('');
        setOnline(false);
        setDescription('');
        setStart_date('');
        setEnd_date('');
        setEarly_bird('');
        setNormal('');
        }    
   
 
   useEffect(() => {
     if (from === "Edit"){
         updateFormData();
         } else{
             deleteFormData();
         }
    },[from]);
    

     const routeChange = () =>{ 
       let path = `/courses`; 
       navigate(path);
     }

     const routeToCourse = () =>{
        let path = `/courses/${idNumber}`;
        navigate(path);
     }
 
 




    const handleSubmit = (e) => {

        console.log('Submit');
        
            let id = idNumber;
           if (from === "Edit"){
            e.preventDefault()
            const data = {
                id,
                title,
                imagePath,
                price: { early_bird, normal },
                dates: { start_date, end_date },
                duration,
                online,
                description,
            };
                
            console.log('Link https://chain-legendary-strawflower.glitch.me/courses/'+idNumber);
            axios.put('https://chain-legendary-strawflower.glitch.me/courses/'+idNumber, data)
            .then((response) => {
                console.log("THE END",response)
                
                routeToCourse();
                
            }
            )
            .catch((error) => console.log(error));
           
                    

              }else 
              {

                e.preventDefault();
                const data = {
                    title,
                    imagePath,
                    price: { early_bird, normal },
                    dates: { start_date, end_date },
                    duration,
                    online,
                    description,
                };



                fetch('https://chain-legendary-strawflower.glitch.me/courses', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then((data) => {
                        console.log(data);
                        setShowAlert(true);
                        setTimeout(() => {
                            setShowAlert('');
                        }, 2000);
                        routeChange();
                    })
                    .catch(error => console.error(error));
        }
    }
    return (
        <>
            <div className="w-full mt-2 mx-auto flex justify-center items-center h-screens">
                <form ref={formRef} onSubmit={handleSubmit} className=" max-h-90vh w-5/6 bg-white p-8 rounded-lg shadow-md overflow-y-auto ">
                    {showAlert && (
                        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span class="font-medium">Το μάθημα καταχωρήθηκε επιτυχώς!</span>
                        </div>
                    )}
                    <h1 className="font-extrabold font-weight: 900 text-4xl mb-4 mt-0  ">{from} Course</h1>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Title
                            </label>
                            <input value={title}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 justify-center"
                                name="title" type="text"
                                onChange={
                                    (e) => setTitle((e.target.value))
                                } placeholder="Lesson" required ></input>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Duration
                            </label>
                            <input value={duration}
                                className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="duration" type="text" onChange={(e) => setDuration((e.target.value))} placeholder="Duration" required></input>
                        </div>
                    </div>
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Image Path
                    </label>
                    {<input value={imagePath}
                        className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="imagePath" type="text" onChange={(e) => setImagePath((e.target.value))} placeholder="Image Path" required></input>}
                    <div className="flex items-center mb-2">
                        <label
                            className=" uppercase tracking-wide text-gray-700 text-xs font-bold  mr-1" >
                            online
                        </label>
                        <input checked={online} className=" px-2 py-1" type="checkbox" onChange={(e) => setOnline((e.target.checked))} />
                    </div>
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        description
                    </label>
                    <textarea value={description}
                        className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
                        name="description" type="text" onChange={(e) => setDescription((e.target.value))} required >
                    </textarea>

                    <p className="font-bold font-weight: 700">Dates</p>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Start Date
                            </label>
                            <input value={start_date}
                                className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="start_date" type="date" onChange={(e) => setStart_date((e.target.value))} required></input>
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                End Date
                            </label>
                            <input value={end_date} className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="end_date" type="date" onChange={(e) => setEnd_date((e.target.value))} required></input>
                        </div>
                    </div>
                    <p className="font-bold font-weight: 700"> Price </p>

                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">


                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Early Bird
                            </label>
                            <input value={early_bird} className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="early_bird" type="number" onChange={(e) => setEarly_bird((e.target.value))} required></input>
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Normal Price
                            </label>
                            <input value={normal} className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="normal" type="number" onChange={(e) => setNormal((e.target.value))} required></input>
                            <div className=" mb-4 flex flex-wrap justify-end">
                                <button className=" m-3 float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-right " type='submit'>
                                {from} Course </button>
                            </div>
                        </div>
                    </div>

                </form>


            </div >
        </>
    )
}

export default AddNewCourse