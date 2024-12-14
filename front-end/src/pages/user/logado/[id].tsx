import React, { useEffect, useState } from 'react'
//import Header from '@/components/header'
import Link from 'next/link';
import Image from 'next/image';
import { Modal } from '../../../components/modal'
import InputsCadastro from '../../../components/Inputscadastro';
import Perfil from '../../../components/perfil';
import PostLogado from '../../../components/postLogado';
import {getAvaliação, getUser} from '../../../utils/api'
import { useRouter } from 'next/router';
import { Avaliacao, User } from '../../api/types'
import { useParams } from 'next/navigation'

export default function UserLogado(){
  const [usuario, setUser] = useState<User | null>(null) 
  const [, setLoading] = useState(true)
  const  params  = useParams();
  const id = params ? params.id : null
  const router = useRouter();
  const GetOneUser = async () => {  {/*chamando a função getUser do api*/}
    try {
      const usuario=await getUser(Number(id))
      setUser(usuario)
      
     
    } 
    catch (error) {

      
      
  }
  finally{
    setLoading(false)
  }
}
const[avaliações,setAvaliação]= useState<Avaliacao[]>([])
const UserAvaliações = async () =>{
try {
  const avaliações = await getAvaliação(Number(id)); 
  setAvaliação(avaliações)
  console.log(avaliações)
  
} catch (error) {
  
}}
  useEffect(() => {
    GetOneUser()
    UserAvaliações()
    
  },)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOpenModal(){
    setModalIsOpen(!modalIsOpen)
  }

    return <main>
      {/*Recriei o Header, mas adaptando o Login para Deslogar*/ }
      <header className="bg-verde_unb h-20 flex items-center justify-between px-4">
        <Link  href="/feed" className="ml-3">
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
        <div className="max-w-xl mx-auto bg-white rounded border border-gray-300 shadow-md">
          <div className='flex flex-col items-center justify-center justify-between'>
            <div className='w-full border-2 border-gray-200'>
              <div className='h-32 float-top bg-green-400 rounded py-10 w-full'>
              <div className='flex flex-col ml-4 float-left'>
                {/*criei o component perfil pra colocar a imagem e os dados do user */}
                <div className='py-4'><Perfil
                  image="/morty.png"
                  name={usuario && usuario.nome} 
                  curso={usuario && usuario.curso}
                  email={usuario && usuario.email}>
                </Perfil> 
              </div></div>
               {/*Criei os botões para editar o perfil e para excluí-lo*/}
              <div className="flex-col flex py-2 float-right">
                <button className="ml-12 mr-6 mt-24 px-5 py-1.5 bg-red-400 text-white rounded hover:bg-red-500 transition-all" onClick={()=> console.log("Clidado Excluir Conta")}>Excluir Perfil</button>
                <button className="ml-12 mr-6 mt-5 px-5 py-1.5 bg-blue-400 text-white rounded hover:bg-blue-500 transition-all" onClick={handleOpenModal}>Editar Perfil</button>
              </div>
            </div>
            </div>
          </div>
            <h1 className='font-bold text-lg text-xl px-4 mt-2'>Publicações</h1>
          <div className='grid place-items-center w-full px-4'>
            {/*Fiz o component PostLogado pra ver as postagens enquanto logado*/}
            {Array.isArray(avaliações) && avaliações?.map((avaliação) => (
            <PostLogado key={avaliação.id}
              user={usuario && usuario.nome}
              datahora={avaliação.createdAt}
              professor='carlos'
              departamento='dept. matematica'
              conteudo={avaliação.conteudo}>              
            </PostLogado>
             ))
            }
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

