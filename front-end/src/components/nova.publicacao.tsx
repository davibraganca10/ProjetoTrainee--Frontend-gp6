import React, { useState } from 'react';
import { Modal } from './modal';
const NovaPublicacao = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal(){
    setModalIsOpen(!modalIsOpen)
  }
  return (
    <>
    <div className="relative">
      <button
        onClick={handleOpenModal}
        className="bg-corBotaoLogin font-fontAll text-white text-lg px-4 py-1 mr-2 border-white border-2 rounded-xl hover:bg-blue-500 transition-all drop-shadow-2xl w-44">
        Nova Publicação
      </button>
    </div>
    <Modal isOpen={modalIsOpen} onClose={handleOpenModal}>
    <div className='mb-6 border-b border-green-300 py-7 text-center'>
            <div className='mt-3'>
              <h2 className='text-3xl font-semibold text-white'>Nova publicação</h2>
            </div>
          </div>
         
          <div className="mb-4">
            <input
              placeholder="Nome do professor"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
          <input
              placeholder="Disciplina"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            </div>
        <textarea className='rounded-md py-3 px-4 bg-green-100 flex flex-center items-center justify-center w-full h-60 transition-all'
        placeholder='Escreva aqui'></textarea>
       <div className='flex justify-center'>
      <button className="flex justify-center w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-400 transition-all" onClick={()=> console.log("Clicado avaliar")}>Publicar</button>
      </div>
    </Modal>
    </>
  );
};

export default NovaPublicacao;