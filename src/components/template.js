import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Cards from "./cards"
import Addnewcourse from "./Addnewcourse"
import Navbar from "./Navbar"
import PageFooter from "./Footer"

const Template = () => {
  return (
    <div className='flex flex-col min-h-screen bg-indigo-600'>
    <Navbar />
    <BrowserRouter>
    <Routes>
        <Route index path='/' element={<Dashboard />} />
        <Route path='/courses' element={<Cards />} />
        <Route path='/addcourse' element={<Addnewcourse />} />
    </Routes>
    </BrowserRouter>
    <PageFooter />
    </div>
  )
}

export default Template