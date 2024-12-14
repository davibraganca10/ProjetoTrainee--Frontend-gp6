"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import InputsCadastro from '@/components/Inputscadastro';
import { User } from '../api/types'
import { postUsuario } from '@/utils/api';

const cadastro = () => {
  return (
    <>
      {/*Imagem*/}
      <div className="size-1/2 float-left flex bg-gray-300">
        <img src="/telaLogin.png" alt="imagem" className="h-screen w-full size-full"/>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-6 rounded-lg w-full max-w-sm">
        {/*Titulo*/}
        <div className="text-3xl text-black font-fontAll">
          <h1 className='text-black text-center'>Cadastro Usuário</h1>
        </div>
        <div className="p-6 rounded-lg w-full max-w-sm">   
        <InputsCadastro />
        </div>
      </div>
      </div>
    </>
  )
}


export default cadastro