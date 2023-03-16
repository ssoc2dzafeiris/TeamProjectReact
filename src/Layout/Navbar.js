import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  let Links = [
    {name:"DASHBOARD", link:"/"},
    {name:"COURSES", link:"/courses"},
    {name:"ADD COURSE", link:"/addcourse"},
    {name:"ABOUT", link:"/about"}
  ]
  let [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full sticky top-0 left-0'>
        <div id="navbar" className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <Link to='/' className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800"><FontAwesomeIcon className='text-4xl text-indigo-600 mr-2 pt-0' icon={faGraduationCap} />
                Courses Project</Link>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
            <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-300px]'} md:opacity-100`}>
                {Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <Link key={link.name} to={link.link} state={{from:'Add'}}  className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
                </li>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar