import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const login = () => {
  return (
    <>
      {/*Imagem*/}
      <div className="float-left bg-gray-200">
        <Image src="/telaLogin.png" alt="imagem" width={500} height={300} className="object-contain"/>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-6 rounded-lg  w-full max-w-sm">
        {/*Titulo*/}
        <div className="w-2/3 object-right flex flex-col justify-center items-center p-8">
          <h1 className='text-black'>Avaliação de Professores</h1>
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
        <div  className="space-x-0">
        <button className="m-10 shadow-md mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600" onClick={()=> console.log("Clicado Criar Conta")}>Entrar</button>
          <button className="shadow-md mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600" onClick={()=> console.log("Clicado Entrar")}><Link href={"/entrar/cadastro"}>Criar Conta</Link></button>
        </div>
      </div>
      </div>
    </>
  )
}

export default login