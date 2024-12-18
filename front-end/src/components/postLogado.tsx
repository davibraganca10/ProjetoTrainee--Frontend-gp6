import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import Comentario from '@/components/comentario'
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
        <div className='justify-between flex'>
            <div className='flex gap-x-2 ml-8'>
                <Image className='' src='/chat.png' alt='' width={30} height={20}/>
                {/*Chama o modal de Comentario*/}
                {children}
            </div>          
            <div className='mr-8 flex gap-x-3'>
              <button onClick={()=> console.log('Editar postagem')}>
                <Image src='/editar.png' alt='editar' width={18} height={20} onClick={handleOpenModal}/>
              </button>
                {/*Chama o modal de edição de avaliações*/}
              <Modal isOpen={modalIsOpen} onClose={handleOpenModal}>
                <div className='mb-6 border-b border-green-300 py-7 text-center'>
                  <div className='mt-3'>
                    <h2 className='text-3xl font-semibold text-white'>Editar avaliação</h2>
                  </div>
                </div>
                <textarea className='bg-green-100 px-4 py-3 flex flex-center items-center rounded-md justify-center w-full h-60 transition-all'
                  placeholder='Escreva aqui'></textarea>
                <div className='flex justify-center'>
                  <button className="flex justify-center w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-400 transition-all" onClick={()=> console.log("Clicado editar")}>Editar</button>
                </div>
              </Modal>
              <button onClick={() => console.log('Excluir postagem')}>
                <Image src='/lixeira.png' alt='excluir' width={20} height={20}/>
              </button>
            </div>  
        </div>
    </div>
    </>
  )
};

export default PostLogado;