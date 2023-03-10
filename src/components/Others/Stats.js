import React ,{useState,useEffect}from 'react';
import StatsItem from './StatsItem';
import CircleSpinner from '../Utilities/Loaders/CircleSpinner';

export default function Stats({title}){
    const url = "https://chain-legendary-strawflower.glitch.me/stats";
    const [stats,setStats] = useState([]);

    const fetchStats = () => {
        fetch(url,{
            method: "GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            }})
        .then((res)=> res.json())
        .then((data) =>{
            setStats(data);
        });
    }

    useEffect(()=>{
        fetchStats();
    },[]);

    if ( stats.length === 0 ) return <CircleSpinner />
    return (
        <>
         <div className="flex flex-col py-2 mt-4 mx-auto">
                <h3 className="text-3xl font-semibold text-indigo-100 py-2 px-5 mx-auto border-b-2 border-gray-100">{title}</h3>
        </div>
        <div className="grid gap-1 md:grid-cols-4 justify-items-center justify-self-center shadow-md bg-white py-5 mx-auto rounded-3xl">
            {stats.length > 0 && 
            stats.map(({id,title,amount}) =>
            (
                <StatsItem key={id} title={title} amount={amount}/>
            ))}
            </div>
        </>
       
    )
}