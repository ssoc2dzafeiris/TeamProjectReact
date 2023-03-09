import React from 'react'
import 'animate.css'
import axios from 'axios';  
import { useNavigate } from "react-router-dom";    


export default function DelleteMessage (props){
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
      let path = `/courses`; 
      navigate(path);
    }
  function deleteUser(id){
             let link = 'https://chain-legendary-strawflower.glitch.me/courses/'+id;

              axios.delete(link)
                  .then(response => {
                      console.log( 'Delete successful')
                      routeChange();
    
                  }
                      )
                  .catch(error => {
                      console.error('There was an error!', error);
              });
          
     }

    if(!props.open) return null
    return (
      <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto animate__animated animate__pulse">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Διαγραφή Course</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Είστε σίγουρος πως θέλετε να διαγράψετε αυτό το μάθημα; Όλα τα δεδομένα θα διαγραφούν. Αυτή η πράξη δεν μπορεί να ανακαλεστεί</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button onClick = {() => deleteUser(props.idNumber)}  type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Διαγραφή</button>
              <button onClick={props.closeModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Ακύρωση</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
