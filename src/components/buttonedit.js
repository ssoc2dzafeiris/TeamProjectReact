import { useState } from "react";
import EditPage from "./editPage";

export default function ButtonEdit(props){
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    function closeModal() {
        setIsModalOpen(false);
    }
    function openModal() {
        setIsModalOpen(true);
    }
    return (
      
       <div style={{ position: 'relative', zIndex: '1' }}>
            <button onClick={() => openModal()} class="border-4 border-indigo-200 hover:border-b-gray-500 bg-blue-500 hover:bg-cyan-600">
            <span class="m-8">Edit</span></button>
            
            <EditPage fetchDetails={props.fetchDetails} data = {props.data} idNumber={props.idNumber} open={isModalOpen} close={closeModal} />
        </div>
    );
}