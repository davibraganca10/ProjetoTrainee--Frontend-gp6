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
      <h2 className="text-lg font-bold left-0 font-lg text-gray-700">{name}</h2>
      <div className='flex gap-x-2'>
        <Image src='/carta.png' alt='' width={25} height={5} />
        <p className="text-gray-800 mt-2 mb-2 text-sm">{curso}</p>
      </div>
      <p className='text-gray-800 mt-1 text-sm'>{email}</p>
    </div></div>
  );

export default Perfil;
