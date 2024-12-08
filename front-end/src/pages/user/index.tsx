import React from 'react'
import Header from '@/components/header'
import Perfil from '@/components/perfil'
import Post from '@/components/posts'


export default function UserDeslogado(){
  return <main>
    <Header />
      <div className="max-w-xl mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
      <div className='flex flex-col'>
            <div className='w-full border-2 border-gray-200'>
              <div className='h-32 float-top bg-green-400 rounded py-10 w-full'>
              <div className='flex flex-col ml-4 float-left'>
                {/*criei o component perfil pra colocar a imagem e os dados do user */}
                <div className='py-4'><Perfil
                  image="/morty.png"
                  name="Morty Gamer"  
                  curso="Ciencia da Computação"
                  email="morty.gamer@cjr.org.br">
                </Perfil> 
              </div></div>
            </div>
          </div>
        <hr className="flex justify-center items-center w-2xl "></hr>
        <h1 className='font-bold text-lg text-xl px-4 mt-2'>Publicações</h1>
        <div className='grid place-items-center w-full px-4'>
          {/*Criei o Post para ver as postagens*/}
          <Post
            user='Billy Batson'
            data='17/08'
            hora='17:08'
            professor='Jacinto Pinto'
            departamento='Dpt do Amor'
            conteudo='Avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário'>
          </Post>
          <Post
            user='Billy Batson'
            data='17/08'
            hora='17:08'
            professor='Jacinto Pinto'
    	      departamento='Dpt do Amor'
            conteudo='Avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário'>
          </Post>
          <Post
            user='Billy Batson'
            data='17/08'
            hora='17:08'
            professor='Jacinto Pinto'
            departamento='Dpt do Amor'
            conteudo='Avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário'>
          </Post>
        </div>
      </div>
      </div>
  </main>
}

