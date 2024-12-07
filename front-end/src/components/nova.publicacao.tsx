import React, { useState } from 'react';
import { ModalNovaPub } from './modal.nova.publicacao';

const NovaPublicacao = () => {
  const [isOpen, setIsOpen] = useState(false);

  const alternar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={alternar}
        className="bg-corBotaoLogin font-fontAll text-white text-lg px-4 py-1 mr-2 border-white border-2 rounded-xl hover:bg-blue-500 transition-all drop-shadow-2xl w-44">
        Nova Publicação
      </button>

      <ModalNovaPub isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-white text-xl">Nova Publicação</h2>
        <p className="text-white">Aqui vai o conteúdo do seu modal.</p>
        
      </ModalNovaPub>
    </div>
  );
};

export default NovaPublicacao;