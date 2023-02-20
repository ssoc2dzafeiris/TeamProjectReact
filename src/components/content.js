import React, {useState} from 'react'
import Modal from './modal'
import SlideOver from './slideover'

const Content = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openSlide, setOpenSlide] = useState(false)

    function closeModal() {
      setOpenModal(false)
    }

    function closeSlide() {
      setOpenSlide(false)
    }

  return (
    <div className='text-white text-center'>
    <button className="bg-white hover:bg-grey-400 text-black font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded my-4 mx-4" onClick={()=> setOpenModal(true)}>Modal Test</button>
    <button className="bg-white hover:bg-grey-400 text-black font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded my-4 mx-4" onClick={()=> setOpenSlide(true)}>Slide Test</button>
    <Modal openModal={openModal} closeModal={closeModal}/>
    <SlideOver openSlide={openSlide} closeSlide={closeSlide} />

    </div>
  )
}

export default Content