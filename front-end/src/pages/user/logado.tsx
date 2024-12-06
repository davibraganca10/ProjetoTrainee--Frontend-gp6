import React, { useState } from 'react'
//import Header from '@/components/header'
import Link from 'next/link';
import Image from 'next/image';
import { Modal } from '@/components/modal';
import InputsCadastro from '@/components/Inputscadastro';
import Perfil from '@/components/perfil';
import PostLogado from '@/components/postLogado';

export default function UserLogado(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal(){
    setModalIsOpen(!modalIsOpen)
  }

    return <main>
      {/*Recriei o Header, mas adaptando o Login para Deslogar*/ }
      <header className="bg-verde_unb h-20 flex items-center justify-between px-4">
        <Link href="/feed" className="ml-3">
        <Image src="/unb_logo.png" alt="logo unb" width={100} height={50} layout="responsive"/>
        </Link>
        <div className='flex gap-x-4'>
          <Link href=''>
            {/*adicionei o botão de notificação e de saída*/}
            <Image src="/notificacao.png" alt='notificação' width={30} height={30} />
          </Link>
          <Link href="/feed" className="mr-4">
            <Image src="/sair.png" alt="" width={31} height={31} />
          </Link>
        </div>
      </header>
        <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-300 rounded-xl shadow-md">
          <div className='flex flex-col items-center justify-center justify-between'>
            <div className='bg-green-100 py-8 w-full rounded '>
              <div className='flex flex-col ml-4 float-left'>
                {/*criei o component perfil pra colocar a imagem e os dados do user */}
                <Perfil
                  image="/morty.png"
                  name="Morty Gamer"  
                  curso="Ciencia da Computação"
                  email="morty.gamer@cjr.org.br">
                </Perfil> 
              </div>
               {/*Criei os botões para editar o perfil e para excluí-lo*/}
              <div className="flex-col flex py-2 float-right">
                <button className="ml-12 mr-5 mt- px-5 py-1.5 bg-red-400 text-white rounded hover:bg-red-500 transition-all" onClick={()=> console.log("Clidado Excluir Conta")}>Excluir</button>
                <button className="ml-12 mr-5 mt-5 px-5 py-1.5 bg-blue-400 text-white rounded hover:bg-blue-500 transition-all" onClick={handleOpenModal}>Editar</button>
              </div>
            </div>
          </div>
          <div className='grid place-items-center w-full'>
            {/*Fiz o component PostLogado pra ver as postagens enquanto logado*/}
            <PostLogado
              user='Bruce Wayne'
              data='16/07'
              hora='16:07'
              professor='Jacinto Pinto'
              departamento='Dpt do Amor'
              conteudo='Avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário'>
            </PostLogado>
            <PostLogado
              user='Billy Batson'
              data='17/08'
              hora='17:08'
              professor='Paula Tejano'
              departamento='Fisioterapia'
              conteudo='Avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário'>
            </PostLogado>
            <PostLogado
              user='Barry Allen'
              data='18/09'
              hora='18:09'
              professor='Deide Costa'
              departamento='Massagem'
              conteudo='Avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário'>
            </PostLogado>
          </div>
        </div>
        {/*Chama o Modal para edição do usuário*/}
        <Modal isOpen={modalIsOpen} onClose={handleOpenModal}>
          <div className='mb-6 border-b border-green-300 py-7 text-center'>
            <div className='mt-3'>
              <h2 className='text-3xl font-semibold text-white'>Editar perfil</h2>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className="p-6 rounded-lg w-full max-w-sm">     
              <InputsCadastro />
              <div className='mb-4'>
                <input
                  type="password"
                  placeholder="Senha atual"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className='mb-4'>
                <input
                  type="password"
                  placeholder="Nova senha"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirmar nova senha"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
            <button className="w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-400 transition-all" onClick={()=> console.log("Clicado Confirmar")}>Confirmar</button>
          </div>
        </Modal>
    </main>
}

