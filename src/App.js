import { BrowserRouter, Routes, Route } from "react-router-dom"

// imported all the basics pages
import Dashboard from "./Pages/Dashboard";
import Cards from "./Pages/cards";
import AddNewCourse from "./Pages/AddNewCourse";
import About from './Pages/About';
import Error from "./Pages/ErrorPage";
import CourseDetails from './Pages/CourseDetails';

// import the shared layout component
import SharedLayout from "./Layout/SharedLayout";


const App = () => {
  return (
  <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element = {<SharedLayout />}>
             <Route index path='/' element={<Dashboard />} />
             <Route path='/courses' element={<Cards />} />
              <Route path='/addcourse' element={<AddNewCourse />} />
              <Route path='/about' element={<About />} />
              <Route path='/courses/:id' element={<CourseDetails />} />
              <Route path='*' element={<Error />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App