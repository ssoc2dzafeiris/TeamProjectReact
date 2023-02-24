import React from 'react'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function ViewCourseLink({ title }) {
  return (
    <>
      <Link
        to="/courses/"
        className="text-white bg-indigo-300 hover:bg-indigo-800 font-light rounded-md text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800"
      >
        <span className="text-white px-1 mx-auto" title="View more details">
          <FontAwesomeIcon icon={faEye} />
        </span>
        {title}
      </Link>
      <a href="#"></a>
    </>
  )
}
