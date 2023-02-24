import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Cards from "./cards"
import AddNewCourse from "./AddNewCourse"
import About from './About'
import Error from "./ErrorPage";
import SharedLayout from "./SharedLayout"

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
              <Route path='*' element={<Error />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App