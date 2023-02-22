import React , {useState} from 'react';


export default function Welcome({text}){
    return (
        <div className="flex flex-col p-5 w-3/6 mt-20 bg-gray-200 rounded-md mx-2 shadow-md">
            <h1 className="text-4xl text-left text-gray-250 font-semibold">Welcome to {text}</h1>
        </div>
    )
}