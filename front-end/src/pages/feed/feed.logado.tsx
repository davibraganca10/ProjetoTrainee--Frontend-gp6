"use client"

import React, { useEffect, useState } from 'react'
import Card from '@/components/card_prof'
import Ordenar from '@/components/ordenar_prof'
import { Professor } from '../api/types'
import HeaderLogado from '@/components/header.logado'
import NovaPublicacaoModal from '@/components/nova.publicacao.d'


const FeedDeslogado = () => {
  
  const [professores, setProfessores] = useState<Professor[]>([]) 
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function getProfessores() {
      try{
        const response = await fetch("http://localhost:3333/professor")
        if (response) {
          const data = await response.json()
          setProfessores(data)
          setLoading(false)
        }
      } catch (err) {
        console.error(err)
      }
    }
    if (loading) {
      getProfessores()
    }
  })
  const ordenarPorNome = () => {
    setProfessores((prev) =>
      [...prev].sort((a, b) => a.nome.localeCompare(b.nome))
    );
  };

  const ordenarPorMateria = () => {
    setProfessores((prev) =>
      [...prev].sort((a, b) => a.departamento.localeCompare(b.departamento))
    );
  };

  const ordenarPorRecente = () => {
    setProfessores((prev) =>
      [...prev].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    );
  };

  const ordenarPorAntiga = () => {
    setProfessores((prev) =>
      [...prev].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
    );
  };

  return (

    <main className="flex flex-col min-h-screen">

      <HeaderLogado />  {/* criei funcao pq pode ser reutilizado */}
      <section className="bg-corFundo flex-1 w-full h-full py-3 px-0 ">
        <div className="flex flex-col justify-evenly gap-y-2 gap-x-2 px-0">
          <div className="flex items-center justify-between gap-x-24 py-6 px-64">
            <h1 className="text-2xl text-black font-fontAll">Todos os Professores</h1>
            <div className='flex flex-col gap-4 justify-start'> 
              <input
                type="text"
                placeholder="Buscar Professor(a)"
                className="w-96 border-gray-300 border-2 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              <div className='flex flex-row'>
                <NovaPublicacaoModal/>
                <Ordenar
                ordenarPorNome = {ordenarPorNome}
                ordenarPorMateria = {ordenarPorMateria}
                ordenarPorRecente = {ordenarPorRecente}
                ordenarPorAntiga = {ordenarPorAntiga} />
              </div>
            </div>
            
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-64 gap-x-4 gap-y-4'>
            
            {Array.isArray(professores) && professores?.map((professor) => (
              <Card key={professor.id}
                id = {professor.id}
                image="/rick.png"
                name={professor.nome}
                role={professor.departamento}
              />
              
            ))}

          </div>

          <hr className="border-gray-600 my-8 mx-20" />

         
          
        </div>
      </section>

    
    </main>
      
  )
}

export default FeedDeslogado;
