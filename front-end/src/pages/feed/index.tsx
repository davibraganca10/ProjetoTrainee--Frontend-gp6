import React from 'react'
import Header from '@/components/header'

const FeedDeslogado = () => {
  return (
    <main>

      <Header />  {/* criei funcao pq pode ser reutilizado */}

      <section className="bg-corFundo w-full h-screen py-3 px-20 ">
        <div className="flex flex-row items-center justify-center py-3 px-20">
          <h1 className="text-2xl text-black font-fontAll mb-6 mr-10">Novos Professores</h1>
            <input
              type="text"
              placeholder="Buscar Professor(a)"
              className="w-200 border-gray-300 border-2 rounded-xl px-4 py-2 text-gray-700 focus:outline-none  focus:border-gray-500"
            />
        </div>
      </section>
      
      

      
        
    </main>
      
  )
}

export default FeedDeslogado;
