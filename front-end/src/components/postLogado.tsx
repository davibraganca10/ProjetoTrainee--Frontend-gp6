import React from 'react'
import Perfil from './perfil'
import Image from 'next/image'

interface Dados {
    user:string
    data: string;
    hora: string;
    professor: string;
    departamento: string;
    conteudo: string;
}


const PostLogado: React.FC<Dados> = ({ conteudo, user, data, hora, professor, departamento }) => (
    <>
    <div className=" w-full bg-green-300 my-5 py-5 rounded-lg">
        <div className='flex flex-col justify-center items-center text-center'>
            <div className='flex flex-row'>
                <h1 className='text'>{user}</h1>
                <div className='text-gray-500 ml-2 float-right overflow-hidden overflow-y-auto' >{data} - {hora} - {professor} - {departamento}</div>
            </div>
            <br></br>
            <p className='text-sm ml-5 mr-5'>{conteudo}</p>
        </div>
        <br></br>
        <div className='justify-between flex'>
            <div className='flex gap-x-2 ml-8'>
                <Image className='' src='/chat.png' alt='' width={30} height={20}/>
                <button className='justify-center text-gray-500'onClick={()=> console.log("Abre os comentários")}>Comentarios</button>
            </div>          
            <div className='mr-8 flex gap-x-3'>
                <button onClick={()=> console.log('Editar postagem')}>
                    <Image src='/editar.png' alt='' width={18} height={20}/>
                </button>
                <button onClick={() => console.log('Excluir postagem')}>
                    <Image src='/lixeira.png' alt='' width={20} height={20}/>
                </button>
            </div>  
        </div>
    </div>
    </>

);

export default PostLogado;