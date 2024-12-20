import React from 'react'
import Perfil from './perfil'
import Image from 'next/image'

interface Dados {
  user:string | null;
  datahora: string
  professor: string | undefined;
  departamento: string | undefined;
  conteudo: string;
  children: React.ReactNode;
}


const Post: React.FC<Dados> = ({ conteudo, children, user, datahora, professor, departamento }) => (
  <>
    <div className=" w-full bg-green-300 my-5 py-5 rounded-lg">
      <div className='flex flex-col justify-center items-center text-center'>
        <div className='flex flex-row'>
          <h1 className='text'>{user}</h1>
          <div className='text-gray-500 ml-2 float-right overflow-hidden overflow-y-auto' >{datahora} - {professor} - {departamento}</div>
        </div>
        <br></br>
        <p className='text-sm ml-5 mr-5'>{conteudo}</p>
      </div>
      <br></br>
      <div className='justify-between flex'>
        <div className='flex gap-x-2 ml-8'>
          <Image className='' src='/chat.png' alt='' width={30} height={20}/>
          {children}
        </div>
      </div>
    </div>
  </>

);

export default Post;