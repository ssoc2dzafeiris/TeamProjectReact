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
    TEAM PROJECT BY: 
    {teamMembers.map((member => 
        (
        <span className='pl-4' key={member.name}><a href={member.github} className='text-gray-800 hover:text-indigo-600 hover:border-indigo-600 hover:border-b-2 duration-100'>
        <FontAwesomeIcon icon={faCode} /> {member.name}</a></span>
        )
    ))
    }
     </footer>
  )
}

export default PageFooter