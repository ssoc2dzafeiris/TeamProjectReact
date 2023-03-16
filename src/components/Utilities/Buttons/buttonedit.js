import { useState } from "react";
import EditPage from "../../editPage";
import { Link } from 'react-router-dom';

export default function ButtonEdit(props){
    const [isModalOpen, setIsModalOpen] = useState(false);
    function closeModal() {setIsModalOpen(false);}
    function openModal() {setIsModalOpen(true);}

    const propsData = {from:'Edit', data : props.data, idNumber:props.idNumber}


    return (
       <div style={{ position: 'relative', zIndex: '1' }}>
             <Link to={`/addcourse/`} state={propsData} >
            <button onClick={() => openModal()} className="text-white  bg-indigo-400 border border-gray-300  hover:bg-white hover:ease-out hover:duration-300 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            <i class="fa-solid fa-pen-to-square"></i> Edit</button>
           
            </Link>
        </div>
    );
}