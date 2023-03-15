import DelleteMessage from './DelleteMessage';
import { useState } from "react";

export default function ButtonDelete(props){
   
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    function closeModal() {
        setIsModalOpen(false);
    }
    function openModal() {
        setIsModalOpen(true);
    }  

    return (
        <>
        <button onClick={() => openModal()} className="text-white bg-red-600 hover:bg-gray-900 hover:ease-out hover:duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 shadow-sm">
        <i class="fa-solid fa-trash-can"></i> Delete
        </button>
            <DelleteMessage idNumber={props.idNumber} closeModal={closeModal} open={isModalOpen} close={closeModal} />
        </>
    );
}
