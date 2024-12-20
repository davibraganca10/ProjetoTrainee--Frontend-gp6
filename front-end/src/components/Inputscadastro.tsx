import { CreateUser } from '@/pages/api/types';
import { postUsuario } from '@/utils/api';
import React, { useState } from 'react';
const InputsCadastro = () => {

    const[form, setform] = useState<CreateUser>(
      {
        nome: "",
        email:"",
        senha:"",
        curso:"",
        departamento:""
      }
    )

    const criaUsuario = async() =>{
      try {
        await postUsuario(form)
      } catch (error) {
        
      }
    }
    return (
        <>

          {/*Entrada de nome*/}
          <div className="mb-4">
            <input
              placeholder="Nome"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={form.nome}
              onChange={(e) => setform({...form,nome:e.target.value})}
            />
          </div>
          
          {/*Entrada de email*/}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={form.email}
              onChange={(e) => setform({...form,email:e.target.value})}
            />
          </div>

          {/*Entrada de senha*/}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={form.senha}
              onChange={(e) => setform({...form,senha:e.target.value})}            
            />
          </div>

          {/*Entrada de curso*/}
          <div className="mb-4">
            <input
              placeholder="Curso"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={form.curso}
              onChange={(e) => setform({...form,curso:e.target.value})}
            />
          </div>

          {/*Entrada de departamento*/}
          <div className='mb-4'>
            <input
              placeholder="Departamento"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={form.departamento}
              onChange={(e) => setform({...form,departamento:e.target.value})}
            />
          </div>

          {/*Botoes*/}
          <div className="justify-center w-full flex space-x-12">
            <button className="px-4 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600" onClick={criaUsuario}>Criar Conta</button>
          </div>
        </>
    );
};
export default InputsCadastro;