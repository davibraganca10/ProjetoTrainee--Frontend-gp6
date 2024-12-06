import React from 'react'
import Image from 'next/image';

interface Param {
    image: string; 
    name: string;  
    curso: string;
      
  }

const perfil: React.FC<Param> = ({ image, name, curso }) => (
    <div className="w-38 h-46 bg-white rounded-xl flex shadow-lg p-4 text-center overflow-hidden">
      <div className="w-28 h-24 mx-auto mb-4">
        <Image src={image} alt='' width={64} height={96} layout="responsive"/>
        
      </div>
      <div className='flex flex-col'>
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm">{curso}</p>
    </div></div>
  );

export default perfil;
