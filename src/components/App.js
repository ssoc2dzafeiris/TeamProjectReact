import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/main.css';
import About from '../pages/About';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Contact from '..pages/Contact';
import Error from '../pages/Error';
import SharedLayout from '../pages/SharedLayout';
import DashboardPage from './DashboardPage';




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
                    </Route>
                    <Route path='dashboard' element={<DashboardPage />}>
                        <Route path='*' element={<Error />} />
                    </Route>
                </Routes>W
            </BrowserRouter>
                    
            </>
        )

    }