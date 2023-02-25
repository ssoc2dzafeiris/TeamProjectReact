import React from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function ViewCourseLink({ title,path}) {
  return (
    <>
      <Link
        to={path}
        className="text-white bg-indigo-300 hover:bg-indigo-700 font-semibold rounded-xl text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-900 focus:outline-none"
      >
        <span className="text-white px-1 mx-auto" title="View more details">
          <FontAwesomeIcon icon={faEye} />
        </span>
        {title}
      </Link>
    </>
  )
}
