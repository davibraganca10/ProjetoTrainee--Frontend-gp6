import React, { useState } from 'react';

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

      {isOpen && (
        <div>
            <h1>hehe</h1>
        </div>
        
      )}
    </div>
  );
};

export default NovaPublicacao;