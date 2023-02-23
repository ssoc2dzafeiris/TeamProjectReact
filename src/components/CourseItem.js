import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import ViewCourseLink from "./ViewCourseLink";

export default function CourseItem({
  title,
  duration,
  start_date,
  end_date,
  online,
}) {
  return (
    <>
      <tr className="bg-indigo-200 hover:bg-white hover:scale-100 cursor-pointer duration-100 p-5">
        <td className="px-6 py-3 font-semibold ">{title}</td>
        <td className="px-6 py-3 font-semibold ">{duration}</td>
        <td className="px-6 py-3 font-semibold ">{start_date}</td>
        <td className="px-6 py-3 ">{end_date}</td>
        <td className="px-6 py-3">
          {!online ? (
             <span className="text-red-500">
             <FontAwesomeIcon icon={faXmark} />
           </span>
          ) : (
            <span className="text-green-500">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          )}
        </td>
        <td className="px-6 py-3">
          <ViewCourseLink title={"Details"}/>
        </td>
      </tr>
    </>
  );
}
