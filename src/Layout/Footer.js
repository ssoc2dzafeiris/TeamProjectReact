import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const PageFooter = () => {

    let teamMembers = [
        {name: 'D. Zafeiris', github: 'https://github.com/ssoc2dzafeiris/'},
        {name: 'S. Katsaberis', github: 'https://github.com/ssoc2skatsaberis'},
        {name: 'N. Katsafados', github: 'https://github.com/ssoc2nkatsafados/'},
        {name: 'N. Petrolis', github: 'https://github.com/ssoc2npetrolis/'}        
    ]

  return (
    <footer id="footer" className='p-4 shadow md:flex md:items-center md:justify-between md:p-6 '>
    <span className="text-md text-gray-500 sm:text-center">© 2023 <a href="https://www.startproject.gr/school-of-code/" className="hover:underline hover:text-red-600">Start School Of Code</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-gray-500 sm:mt-0">
    <h3 className='text-gray-500'>TEAM PROJECT BY:</h3> 
    {teamMembers.map((member => 
        (
          <li key={member.name}>
            <span className='pl-4' >
              <a href={member.github} title={member.name} className='text-gray-400 hover:text-blue-900 hover:border-indigo-800 hover:border-b-2 duration-100 mr-4 md:mr-6 '>
          <FontAwesomeIcon icon={faCode} /> {member.name}</a>
          </span>
          </li>
        )
    ))
    }
     </ul>
     </footer>
  )
}

export default PageFooter