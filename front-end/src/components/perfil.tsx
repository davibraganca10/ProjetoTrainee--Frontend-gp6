import React from 'react'
import Image from 'next/image';

interface Param {
    image: string; 
    name: string | null;  
    curso: string | null;
    email: string | null;
      
  }

const Perfil: React.FC<Param> = ({ image, name, curso, email }) => (
  <div className="rounded-xl ml-10">
    <div className="w-32 h-24 ml-4 mb-9">
      <Image src={image} alt='' width={64} height={96} layout="responsive"/>   
    </div>
    <div className='mt-2 ml-5'>
      <h2 className="text-lg font-bold font-lg text-gray-700">{name}</h2>
      <div className='items-center flex gap-x-2'>
        <Image className='mt-2' src='/predio,.png' alt='' width={16} height={20}/>
        <p className="text-gray-800 mt-2 text-md">{curso}</p>
      </div>
      <div className='items-center flex gap-x-2'>
        <Image className='mt-2 ' src='/carta.png' alt='' height={20} width={18} />
        <p className='text-gray-800 mt-1 text-sm'>{email}</p>
      </div>
    </div>
  </div>
  );

export default Perfil;
