"use client"
import React, { useEffect, useState } from 'react'
import Header from '../../../components/header'
import Perfil from '../../../components/perfil'
import Post from '../../../components/posts'
import { useRouter } from 'next/router';
import { Avaliacao, Professor, User } from '../../api/types'
import { getAvaliação, GetProfavaliacao, getUser } from '@/utils/api'
import { useParams } from 'next/navigation'

export default function UserDeslogado(){
    const [usuario, setUser] = useState<User | null>(null) 
    const [, setLoading] = useState(true)
    const  params  = useParams();
    const id = params ? params.id : null
    const router = useRouter();
    const GetOneUser = async () => {
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
  const [professores,setProfessor]= useState<Professor>()
  
  const UserAvaliações = async () =>{
  try {
    const avaliações = await getAvaliação(Number(id)); 
    setAvaliação(avaliações)
    if (Array.isArray(avaliações)) {
      // Use Promise.all para esperar todas as promessas de GetProfavaliacao serem resolvidas
      const resultados = await Promise.all(avaliações.map(async (avaliação) => {
        const professores = await GetProfavaliacao(avaliação.professorID);
        setProfessor(professores)
       
  
       
      }));
     
     
    }
   
   
    
    
  } catch (error) {
    
  }}
    useEffect(() => {
      GetOneUser()
      UserAvaliações()
    },)
  
  return <main>
    <Header />
    <div>
      <div className="max-w-xl mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
      <div className='flex flex-col'>
            <div className='w-full border-2 border-gray-200'>
              <div className='h-32 float-top bg-green-400 rounded py-10 w-full'>
              <div className='flex flex-col ml-4 float-left'>
                {/*criei o component perfil pra colocar a imagem e os dados do user */}
                <div className='py-4'>
               
              <Perfil key={usuario && usuario.id}
                image="/morty.png"
                name={usuario && usuario.nome}
                curso={usuario && usuario.departamento}
                email={usuario && usuario.email}
              />
              
        
              
                </div>
              </div></div>
            </div>
          </div>
        <hr className="flex justify-center items-center w-2xl "></hr>
        <h1 className='font-bold text-lg text-xl px-4 mt-2'>Publicações</h1>
        <div className='grid place-items-center w-full px-4'>
          {/*Criei o Post para ver as postagens*/}
          {Array.isArray(avaliações) && avaliações?.map((avaliação) => (
          <Post key={avaliação.id}
            user={usuario && usuario.nome}
            datahora={avaliação.createdAt}
            professor={professores && professores?.nome}
            departamento={professores && professores?.departamento}
            conteudo={avaliação.conteudo}>
          </Post>
           ))
          }
        </div>
      </div>
      </div>
  </main>
}

