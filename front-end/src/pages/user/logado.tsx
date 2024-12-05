import React from 'react'
//import Header from '@/components/header'
import Link from 'next/link';
import Image from 'next/image';

export default function UserLogado(){
    return <main>
      {/*Recriei o Header, mas adaptando o Login para Deslogar*/ }
 <header className="bg-verde_unb h-20 flex items-center justify-between px-4">
      <Link href="/feed" className="ml-3">
        <Image src="/unb_logo.png" alt="logo unb" width={100} height={50} layout="responsive"/>
      </Link>
      <Link href="/feed" className="mr-3">
      <Image src="/icone_porta.png" alt="" width={40} height={20} />
      </Link>
    </header>
        <div className="max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-xl shadow-md">
          <div className='flex flex-col items-center justify-center justify-between'>
            <div className='bg-green-100 w-full rounded py-3'>
             <h1 className='text-2xl ml-4'>Usuário exemplo</h1>
              <h2 className='text-lg ml-4'>Cic</h2> 
              <h2 className='text-lg ml-4'>exemplo@unb.br</h2>
              <button className="ml-12 mr-4 mt-5 px-5 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition-all" onClick={()=> console.log("Clidado Excluir Conta")}>Excluir</button>
              <button className="ml-12 mr-4 mt-5 px-5 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-all" onClick={()=> console.log("Clidado Editar Conta")}>Editar</button>
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

