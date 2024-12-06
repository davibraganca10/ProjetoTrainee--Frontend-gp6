import React from 'react'
import Perfil from './perfil'

interface Dados {
    user:string
    data: string;
    hora: string;
    professor: string;
    departamento: string;
    conteudo: string;
}

const Post: React.FC<Dados> = ({ conteudo, user, data, hora, professor, departamento }) => (
    <>
    <div className='flex flex-col justify-center items-center text-center'>
    <div className='flex flex-row'>
    <h1 className='text'>{user}</h1>
    <div className='text-gray-500 ml-2 float-right overflow-hidden overflow-y-auto' >{data} - {hora} - {professor} - {departamento}</div>
    </div>
    <br></br>
    <p className='text-sm '>{conteudo}</p>
    </div>
    </>

);
export default Post;