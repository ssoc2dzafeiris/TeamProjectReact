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
        <button onClick={() => openModal()} className="border-4 border-indigo-200 hover:border-b-gray-500 bg-blue-500 hover:bg-cyan-600">
        <span className="m-8">Delete</span>
        </button>
        
            <DelleteMessage idNumber={props.idNumber} closeModal={closeModal}  open={isModalOpen} close={closeModal} />
    
        </>
    );
}
