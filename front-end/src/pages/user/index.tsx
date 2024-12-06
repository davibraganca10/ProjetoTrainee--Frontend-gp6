import React from 'react'
import Header from '@/components/header'
import Perfil from '@/components/perfil'


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
            ></Perfil>
            </div>
            </div>
            </div>
            <hr className="flex justify-center items-center w-2xl "></hr>
            <div className='grid place-items-center w-full'>
          
                <div className="p-4 bg-green-300 my-5 rounded-lg">
                <div className='flex flex-row items-center justify-center  '>
                <h1 className='text-bold'>Usuário exemplo</h1>
                <br></br>
                <h2 className='text-gray-600'> - data, hora - professor - departamento</h2>
                </div>
                <p className='text-sm p-4 flex flex-col justify-center items-center'> avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuárioavaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário avaliação 1 desse usuário</p>
                <p className='text-gray-600 ml-4'>comentários</p>
                </div>
                <div className='p-4 bg-green-300 my-5 rounded-lg'>
                <div className='flex flex-row items-center justify-center'>
                <h1 className='text-bold'>Usuário exemplo</h1>
                <br></br>
                <h2 className='text-gray-600'>- data, hora - professor - departamento</h2>
                </div>
                <p className='text-sm p-4 flex flex-col justify-center items-center'>avaliação 2 desse usuário avaliação 2 desse usuário  avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário</p>
                <p className='text-gray-600 ml-4'>comentários</p>
                </div>
                <div className='p-4 bg-green-300 my-5 rounded-lg'>
                <div className='flex flex-row items-center justify-center'>
                <h1 className='text-bold'>Usuário exemplo</h1>
                <br></br>
                <h2 className='text-gray-600'>- data, hora - professor - departamento</h2>
                </div>
                <p className='text-sm p-4 flex flex-col justify-center items-center'>avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário</p>
                <p className='text-gray-600 ml-4'>comentários</p>
                </div>
            </div>
            </div>
    </main>
}

