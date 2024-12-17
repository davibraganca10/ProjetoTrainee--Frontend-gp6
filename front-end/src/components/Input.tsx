import { EditUser } from '@/pages/api/types';
import { patchUser, } from '@/utils/api';
import React, { useState } from 'react';
const Input = () => {

    const[form, setform] = useState<EditUser>(
      {
        nome: "",
        email:"",
        senha:"",
        curso:"",
        departamento:""
      }
    )

    const editUsuario = async() =>{
      try {
        await patchUser(form)
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
        </>
    );
};
export default Input;