import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCodeCompare,faAt,faLink} from '@fortawesome/free-solid-svg-icons'

export default function TeamUserCard({title,fname,lname,bio,github,linkedin,email}){
    return(
        <>
         <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-indigo-600 dark:border-slate-700 dark:hover:border-transparent">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-slate-300" src={`${github}.png`} alt={`${fname} ${lname}`} title={`${fname} ${lname}`}/>
                <h1 className="mt-4 text-2xl font-semibold text-slate-700 capitalize  group-hover:text-white">{fname} {lname}</h1>
                <p className="mt-2 text-slate-600 font-semibold  group-hover:text-slate-200 group-hover:border-b-2">{title}</p>
                <div className="flex mt-3 -mx-2 ">
                    <a href={`mailto:${email}`} title="email" className="mx-2 text-slate-600  hover:text-slate-500 dark:hover:text-slate-300 group-hover:text-white" aria-label="Email">
                    <FontAwesomeIcon icon={faAt} />
                    </a>
                    <a href={linkedin} title="linkedin" className="mx-2 text-slate-600  hover:text-slate-500  group-hover:text-white" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLink} />
                    </a>
                    <a href={github} title="github" className="mx-2 text-slate-600  hover:text-slate-500  group-hover:text-white" aria-label="Github">
                        <FontAwesomeIcon icon={faCodeCompare} />
                    </a>
                </div>
                <p className="mt-3 text-slate-500  text-center  group-hover:text-slate-300 ">{bio}</p>
               
                </div>
        </>

    )

}