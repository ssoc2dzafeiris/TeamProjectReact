import React from 'react';

export default function StatsItem({id,title,amount}){
    return (
                <div className="flex items-center px-2 py-2 bg-white rounded-md shadow-md ">
                    <div className="px-4 bg-blue-600 rounded">
                        <h4 className="text-2xl font-semibold text-gray-100">{amount}</h4>
                    </div>
                    <div className="mx-2">
                        <div className="text-gray-700 text-semibold text-xl">{title}</div>
                    </div>
                </div>
    )
}