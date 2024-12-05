import React from 'react'
import Image from 'next/image';

interface Parametros {
    image: string; 
    name: string;  
    role: string;  
  }

const Card: React.FC<Parametros> = ({ image, name, role }) => (
    <div className="w-38 h-46 bg-white rounded-xl shadow-lg p-4 text-center overflow-hidden">
      <div className="w-28 h-24 mx-auto mb-4">
        <Image src={image} alt={name} width={64} height={96} layout="responsive"/>
        
      </div>
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  );

export default Card;
