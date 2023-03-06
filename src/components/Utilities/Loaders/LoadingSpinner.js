import React from 'react';

export default function LoadingSpinner(){

    return (
        <div className="fixed top-15 left-0 right-0 bottom-15 w-full h-screen z-50 overflow-hidden bg-slate-900 opacity-95 flex flex-col items-center justify-center">
             <div className="flex items-center justify-center space-x-2 w-1/2 opacity-100 py-1">
	        <div className="w-12 h-12 rounded-full animate-pulse bg-violet-900 shadow-xl z-20"></div>
	        <div className="w-12 h-12 rounded-full animate-pulse bg-violet-900 shadow-xl z-20"></div>
	        <div className="w-12 h-12 rounded-full animate-pulse bg-violet-900 shadow-xl z-20"></div>
            </div>
        <h2 className="text-center text-white text-2xl font-bold z-30">Loading...</h2>
	    <p className="w-1/3 text-center text-white text-xl z-20">This may take a few seconds, please don't close this page.</p>
        </div>
       
    )
}