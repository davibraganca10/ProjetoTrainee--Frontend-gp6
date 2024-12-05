import { useRouter } from 'next/router'
import React from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';

function Perfil(){
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
        <Header />
<div className='flex'>
<div className='w-24 h-24 object-right-top'>
<Link href="/feed">
<Image src="/seta-pequena-esquerda.png" alt="voltar" width={100} height={100} layout="responsive"/> 
</Link>
</div>
        <div className="max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-green-100 w-full'>
            <h1 className='text-2xl'>Usuário exemplo { id }</h1>
            <h2 className='text-lg'>Cic</h2>
            <h2 className='text-lg'>exemplo@unb.br</h2>
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
                <p className='text-gray-600'>comentários</p>
                </div>
                
                <div className='p-4 bg-green-300 my-5 rounded-lg'>
                <div className='flex flex-row items-center justify-center'>
                <h1 className='text-bold'>Usuário exemplo</h1>
                <br></br>
                <h2 className='text-gray-600'>- data, hora - professor - departamento</h2>
                </div>
                <p className='text-sm p-4 flex flex-col justify-center items-center'>avaliação 2 desse usuário avaliação 2 desse usuário  avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário avaliação 2 desse usuário</p>
                <p className='text-gray-600'>comentários</p>
                </div>
                <div className='p-4 bg-green-300 my-5 rounded-lg'>
                <div className='flex flex-row items-center justify-center'>
                <h1 className='text-bold'>Usuário exemplo</h1>
                <br></br>
                <h2 className='text-gray-600'>- data, hora - professor - departamento</h2>
                </div>
                <p className='text-sm p-4 flex flex-col justify-center items-center'>avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário avaliação 3 desse usuário</p>
                <p className='text-gray-600'>comentários</p>
                </div>
            </div>
            </div>
</div>
</>
    );
}
export default Perfil;