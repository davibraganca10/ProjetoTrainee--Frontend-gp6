import React, { useState } from 'react';
import { OrdenarProfs } from '@/pages/api/types';

const Ordenar: React.FC<OrdenarProfs> = ({
  ordenarPorNome,
  ordenarPorMateria,
  ordenarPorRecente,
  ordenarPorAntiga,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const alternar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={alternar}
        className="bg-corBotaoLogin font-fontAll text-white text-lg px-4 py-1 mr-7 border-white border-2 rounded-xl hover:bg-blue-500 transition-all drop-shadow-2xl">
        Ordenar
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-verde_unb bg-opacity-90 rounded-lg shadow-lg z-10">
          <ul className="flex flex-col gap-y-2 p-4 text-center text-black">
            <li className="border-b pb-2 hover:cursor-pointer hover:text-blue-600 transition"
            onClick={ordenarPorNome}>
              Nome
            </li>
            <li className="border-b pb-2 hover:cursor-pointer hover:text-blue-600 transition"
            onClick={ordenarPorMateria}>
              Matéria
            </li>
            <li className="border-b pb-2 hover:cursor-pointer hover:text-blue-600 transition" 
            onClick={ordenarPorRecente}>
              Recentes
            </li>
            <li className="hover:cursor-pointer hover:text-blue-600 transition"
            onClick={ordenarPorAntiga}>
              Antigas
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Ordenar;