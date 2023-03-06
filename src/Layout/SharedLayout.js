import React from 'react';
import {Outlet } from 'react-router-dom';
import Navbar from './Navbar'
import PageFooter from './Footer'

export default function SharedLayout(){

    return(
        <>
         <div className='flex flex-col min-h-screen bg-indigo-600'>
            <Navbar />
            <Outlet />
            <PageFooter />  
        </div>
        </>
    )
}