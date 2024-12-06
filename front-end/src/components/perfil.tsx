import React from 'react'
import Image from 'next/image';

interface Param {
    image: string; 
    name: string;  
    curso: string;
    email: string;
      
  }

const Perfil: React.FC<Param> = ({ image, name, curso, email }) => (
    <div className="rounded-xl flex text-center overflow-hidden">
      <div className="w-28 h-24 mx-auto mb-4">
        <Image src={image} alt='' width={64} height={96} layout="responsive"/>
        
      </div>
      <div className='flex ml-10 text-center justify-center flex-col'>
      <Image src='/carta.png' alt='' width={40} height={20} />
      <h2 className="text-lg font-bold font-lg text-gray-700">{name}</h2>
      <p className="text-gray-800 mt-2 text-sm">{curso}</p>
      <p className='text-gray-800 mt-1 text-sm'>{email}</p>
    </div></div>
  );

export default Perfil;
