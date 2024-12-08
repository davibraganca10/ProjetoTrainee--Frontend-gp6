import React, { useState } from 'react';
import { ModalNovaPub } from './modal.nova.publicacao';

const NovaPublicacao = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal(){
    setModalIsOpen(!modalIsOpen)
  }
  return (
    <div className="relative">
      <button
        onClick={handleOpenModal}
        className="bg-corBotaoLogin font-fontAll text-white text-lg px-4 py-1 mr-2 border-white border-2 rounded-xl hover:bg-blue-500 transition-all drop-shadow-2xl w-44">
        Nova Publicação
      </button>

      <ModalNovaPub isOpen={modalIsOpen} onClose={handleOpenModal}>
        <h2 className="text-white text-xl">Nova Publicação</h2>
        <p className="text-white">terminar essa parte</p>
        
      </ModalNovaPub>
    </div>
  );
};

export default NovaPublicacao;