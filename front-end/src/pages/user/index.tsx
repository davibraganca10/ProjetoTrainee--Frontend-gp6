import React from 'react'
import Header from '@/components/header'
import Perfil from '@/components/perfil'
import Post from '@/components/posts'


export default function UserDeslogado(){
    return <main>
        <Header />
        <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <div className='w-full'>
                <div className='bg-green-100 float-left w-full rounded py-3'>
                    <div className='ml-5 float-left'>
                        <Perfil
                            image='/morty.png'
                            name='Morty  Gamer'
                            curso='Ciencia da Computação'
                            email='morty.gamer@cjr.org.br'
                        >
                        </Perfil>
                    </div>
                </div>
            </div>
            <hr className="flex justify-center items-center w-2xl "></hr>
            <div className='grid place-items-center w-full'>
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
    </main>
}

