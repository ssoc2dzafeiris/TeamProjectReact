import React ,{useState,useEffect}from 'react';
import StatsItem from './StatsItem';

export default function Stats({title}){
    const url = "http://localhost:3001/stats";
    const [stats,setStats] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data) =>{
            setStats(data);
        });
    },[]);

    return (
        <>
         <div className="flex flex-col py-2 mt-4 mx-auto border-gray-200">
                <h3 className="text-3xl font-semibold text-indigo-200 py-2 mx-4 border-b-2">{title}</h3>
        </div>
        <div className="grid gap-3 md:grid-cols-4 justify-items-center shadow-md bg-white py-4 rounded-md">
            {stats.length && 
            stats.map(({id,title,amount}) =>
            (
                <StatsItem key={id} title={title} amount={amount}/>
            ))}
        
            </div>
        </>
       
    )
}