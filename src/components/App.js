import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import all the main pages
import About from '../pages/About';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import DashboardPage from './DashboardPage';
import Contact from '../pages/Contact';

import Error from '../pages/Error';
import SharedLayout from '../pages/SharedLayout';
//import the navbar of website
import NavbarMain from './Navbar';



export default function App(props){
    return (
        <>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        <Route index element ={<Home />}/>
                        <Route path='about' element={<About />} />
                        <Route path='categories' element={<Categories />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='*' element={<Error />} />
                        <Route path='dashboard' element={<DashboardPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
                    
            </>
        )

    }