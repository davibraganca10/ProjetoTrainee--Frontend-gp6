import React, { useState } from 'react';
import Link from "next/link";
import { postLogin } from '@/utils/api';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [form, setForm] = useState({ email: "", senha: "" });
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth(); 
  const router = useRouter(); 

  const enviaLogin = async () => {
    try {
      setError(null);
      const response = await postLogin(form); 
      const { access_token } = response;
      login(access_token); 
      router.push('/feed/feed.logado'); 
    } catch (err: any) {
      console.error("Erro ao fazer login:", err);
      setError("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  return (
    <>

      <div className="size-1/2 float-left flex bg-gray-300">
        <img src="/telaLogin.png" alt="imagem" className="h-screen w-full size-full" />
      </div>

      <div className="size-1/2 float-right min-h-screen flex items-center justify-center bg-gray-200">
        <div className="p-6 rounded-lg justify-center w-full max-w-sm">
          
          <div className="text-3xl text-black font-fontAll">
            <h1 className="text-black text-center">Avaliação de Professores</h1>
          </div>

          <div className="p-6 rounded-lg w-full max-w-sm">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

          
            <div>
              <input
                type="password"
                placeholder="Senha"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={form.senha}
                onChange={(e) => setForm({ ...form, senha: e.target.value })}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <div className="justify-center w-full max-w-sm flex space-x-12">
            <button
              className="w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-500 transition-all"
              onClick={enviaLogin}
            >
              Entrar
            </button>
            <Link href="/entrar/cadastro" className="w-1/3 shadow-md mt-4 py-2 bg-green-500 text-white rounded hover:bg-blue-500 transition-all">
              <button className="justify-center w-full flex text-center">
                Criar Conta
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
