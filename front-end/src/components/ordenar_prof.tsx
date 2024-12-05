import React, { useState } from 'react';

const Ordenar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const alternar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={alternar}
        className="bg-corBotaoLogin font-fontAll text-white text-lg px-6 py-1 mr-7 border-white border-2 rounded-xl hover:bg-blue-500 transition-all drop-shadow-2xl">
        Ordenar
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-verde_unb bg-opacity-90 rounded-lg shadow-lg z-10">
          <ul className="flex flex-col gap-y-2 p-4 text-center text-black">
            <li className="border-b pb-2 hover:cursor-pointer hover:text-blue-600 transition">
              Nome
            </li>
            <li className="border-b pb-2 hover:cursor-pointer hover:text-blue-600 transition">
              Matéria
            </li>
            <li className="border-b pb-2 hover:cursor-pointer hover:text-blue-600 transition">
              Recentes
            </li>
            <li className="hover:cursor-pointer hover:text-blue-600 transition">
              Antigas
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Ordenar;