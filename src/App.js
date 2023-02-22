import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/content';
import PageFooter from './components/Footer';
import Dashboard from './components/Dashboard';


export default function App() {
    return (
    <>
     <div className='flex flex-col min-h-screen bg-indigo-600'>
      <Navbar />
      <Dashboard />
      <PageFooter />
     </div>
    </>
    )
  }