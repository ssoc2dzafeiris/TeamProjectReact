import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



export default function CourseItem({title,duration,start_date,end_date,online}) {
  return (
    <>
      <tr className="bg-indigo-100 hover:bg-indigo-300 hover:scale-100 cursor-pointer duration-300 p-5">
        <td className="px-6 py-3">{title}</td>
        <td className="px-6 py-3">{duration}</td>
        <td className="px-6 py-3">{start_date}</td>
        <td className="px-6 py-3">{end_date}</td>
        <td className="px-6 py-3">{!(online) ? <FontAwesomeIcon  icon={faCheck} /> : 'offline'}
        
        </td>
        <td className="px-6 py-3">
          <button onClick>Actions</button>
        </td>
      </tr>
    </>
  );
}
