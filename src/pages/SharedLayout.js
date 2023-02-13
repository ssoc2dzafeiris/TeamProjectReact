import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { Link,Outlet } from 'react-router-dom';

export default function Home(){

    return(
        <>
        <Navbar />
        <Outlet />
        <Footer />  
        </>
       
        
        
    )
}