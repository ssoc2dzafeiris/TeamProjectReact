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
    <footer className='text-center fixed w-full bottom-0 left-0 right-0 bg-white text-gray-800 text-xl py-2 px-7 flex items-center flex-row justify-center'>
    <h3 className='text-gray-400'>TEAM PROJECT BY:</h3> 
    <ul className="flex flex-row">
    {teamMembers.map((member => 
        (
          <li className="flex flex-col">
            <span className='pl-4' key={member.name}>
              <a href={member.github} title={member.name} className='text-gray-400 hover:text-blue-900 hover:border-indigo-800 hover:border-b-2 duration-100 '>
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