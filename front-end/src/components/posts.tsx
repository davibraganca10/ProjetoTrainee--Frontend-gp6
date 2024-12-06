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
    <button className='ml-8 justify-center text-gray-500'onClick={()=> console.log("Abre os comentários")}>Comentarios</button>
    </div>
    </>

);
export default Post;