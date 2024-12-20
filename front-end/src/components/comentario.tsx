import React, { useState } from 'react';
import { Modal } from './modal';
const Comentario = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal(){
    setModalIsOpen(!modalIsOpen)
  }
  return (
    <>
      <div className="relative">
        <button
          onClick={handleOpenModal}
          className="justify-center text-gray-500">
          Comentarios
        </button>
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleOpenModal}>
      <div className='mb-6 border-b border-green-300 py-7 text-center'>
        <div className='mt-3'>
          <h2 className='text-3xl font-semibold text-white'>Adicionar comentario</h2>
        </div>
      </div>
      <textarea className='bg-green-100 px-4 py-3 flex flex-center items-center rounded-md justify-center w-full h-60 transition-all'
        placeholder='Escreva aqui'></textarea>
      <div className='flex justify-center'>
        <button className="flex justify-center w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-400 transition-all" onClick={()=> console.log("Clicado Enviar")}>Enviar</button>
      </div>
      </Modal>
    </>
  );
};

export default Comentario;