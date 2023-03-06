import React  from 'react';
export default function Welcome({text}){
    return (
        <div className="flex flex-start flex-col py-2 w-3/6 mt-5 bg-indigo-800/30 rounded-md shadow-sm">
            <h1 className="text-4xl text-left text-gray-200 "> |Welcome to  
            <span className="text-4xl text-white font-semibold">  {text}</span></h1>
        </div>
    )
}