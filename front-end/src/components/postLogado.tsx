import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import { Modal } from './modal'

interface Dados {
  user:string | null;
  datahora: string;
  professor: string | undefined;
  departamento: string | undefined;
  conteudo: string;
  children: ReactNode;
}

    
const PostLogado: React.FC<Dados> = ({ conteudo, user, datahora, professor, departamento, children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal(){
    setModalIsOpen(!modalIsOpen)
  }
  
  return(
    <>
    
    <div className=" w-full bg-green-300 my-5 py-5 rounded-lg">
        <div className='flex flex-col justify-center items-center text-center'>
            <div className='flex flex-row'>
                <h1 className='text'>{user}</h1>
                <div className='text-gray-500 ml-2 float-right overflow-y-auto' >{datahora} - {professor} - {departamento}</div>
            </div>
            <br></br>
            <p className='text-sm ml-5 mr-5'>{conteudo}</p>
        </div>
        <br></br>
        {children}
    </div>
    </>
  )
};

export default PostLogado;