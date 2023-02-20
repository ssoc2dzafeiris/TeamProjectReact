import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import all the main pages
import About from '../pages/About';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Courses from '../pages/Courses';
import DashboardPage from './DashboardPage';
import Contact from '../pages/Contact';
import AddNewCourse from '../pages/AddNewCourse';
import Error from '../pages/Error';
import SharedLayout from '../pages/SharedLayout';
import ModalExample from './Modal';




export default function App(props){
    return (
        <>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        <Route index element ={<Home />}/>
                        <Route path='about' element={<About />} />
                        <Route path='categories' element={<Categories />} />
                        <Route path='courses' element={<Courses />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='addNewCourse' element={<AddNewCourse />} />
                        <Route path='*' element={<Error />} />
                        <Route path='dashboard' element={<DashboardPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            <div></div>
            </>
            
        )

    }