import React from 'react';
import NavbarMain from '../components/Navbar';
import Footer from '../components/Footer';
import { Link,Outlet } from 'react-router-dom';

export default function Home(){

    return(
        <>
        <NavbarMain />
        <Outlet />
        <Footer />  
        </>
       
        
        
    )
}