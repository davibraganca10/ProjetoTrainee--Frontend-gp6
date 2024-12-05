import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const login = () => {
  return (
    <>
      {/*Imagem*/}
      <div className="size-1/2 float-left flex bg-gray-300">
        <img src="/telaLogin.png" alt="imagem" className="h-screen w-full size-full"/>
      </div>

      <div className="size-1/2 float-right min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-6 rounded-lg justify-center w-full max-w-sm">
        {/*Titulo*/}
        <div className="text-3xl text-black font-fontAll">
          <h1 className='text-black text-center'>Avaliação de Professores</h1>
        </div>

        <div className="p-6 rounded-lg w-full max-w-sm">
          {/*Entrada de email*/}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/*Entrada de senha*/}
          <div>
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/*Botoes*/}
        <div className="justify-center w-full max-w-sm flex space-x-12">
          <button className="w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600" onClick={()=> console.log("Clicado Criar Conta")}>Entrar</button>
          <button className="w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600" onClick={()=> console.log("Clicado Entrar")}><Link href={"/entrar/cadastro"}>Criar Conta</Link></button>
        </div>
      </div>
      </div>
    </>
  )
}

export default login