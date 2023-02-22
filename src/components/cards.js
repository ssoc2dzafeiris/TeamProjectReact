import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faCalendar, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = () => {
        axios.get("http://localhost:3001/courses")
          .then(res => {
            setData(res.data);
          })
      };
      fetchData();
    }, []);

  return (
    <div className='flex items-center justify-center flex-wrap text-indigo-600 px-5 py-4 mx-auto'>
    {data.map(item => (
        <div key={item.id} className='h-full lg:w-96 md:w-56 sm:w-42 border-2 border-gray-400 bg-white border-opacity-60 rounded-lg overflow-hidden m-4  hover:scale-110 hover:shadow-2xl hover:border-white transition duration-200 ease-linear'>
            <a href='#'>
            <img src={`images${item.imagePath}`} alt={item.title} className='lg:h-42 md:h-42 w-full object-cover object-center' />
            <div className='p-2'>
                <h1 className='text-xl font-semibold mb-3'>{item.title}</h1>
            </div>
            <div className='text-gray-700'>
                <div className='flex flex-row justify-between text-sm px-8 py-2'>
                    <div className='bg-indigo-600 text-white rounded-lg font-semibold p-2'><FontAwesomeIcon icon={faCoins} /> Τιμή Early Bird {item.price.early_bird}€</div>
                    <div className='font-semibold p-2'><FontAwesomeIcon icon={faCoins} /> Τιμή {item.price.normal}€</div>
                </div>
                <div className='flex flex-row justify-between text-sm px-8 py-2'>
                    <div><FontAwesomeIcon icon={faCalendar} /> {item.dates.start_date}</div>
                    <div><FontAwesomeIcon icon={faCalendarCheck} /> {item.dates.end_date}</div>
                </div>
                <div className='flex flex-row justify-between text-sm px-8 py-2'>
                    <div><b>Διάρκεια:</b> {item.duration} </div>
                    <div className='font-bold'>{item.online ? 'Online' : 'Δια ζώσης'}</div>
                    </div>
            </div>
            </a>
        </div>
))}    </div>
  )
}

export default Cards