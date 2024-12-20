import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  email: string;
}



const HeaderLogado = () => {
  const { logout } = useAuth(); 
  const router = useRouter(); 

  const handleLogout = () => {
    logout(); 
    router.push('/feed');
  };
  const decodeJWT = (token: string): any => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Erro ao decodificar o token JWT:', error);
      throw new Error('Token inválido');
    }
  };
  useEffect(() => {
      const token = localStorage.getItem("token");
      console.log("Token carregado:", token);
      if (token) {
        try {
          const userData = decodeToken(token);
          setUser(userData);
          setIsLoggedIn(true);
        } catch (error) {
          console.error("Erro ao processar o token no carregamento:", error);
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    }, []);
     const [user, setUser] = useState<User | null>(null);
      const [, setLoading] = useState(true);
    const [, setIsLoggedIn] = useState(false);
      const decodeToken = (token: string) => {
        const decodedToken: any = decodeJWT(token);
        const currentTime = Date.now() / 1000;
    
        if (decodedToken.exp < currentTime) {
          throw new Error("Token expirado");
        }
    
        return {
          id: decodedToken.sub,
          email: decodedToken.email,
        };
      };
  return (
    <header className="bg-verde_unb h-20 flex items-center justify-between border border-gray-300 px-4">
      <Link href="/feed" className="ml-3">
        <Image src="/unb_logo.png" alt="logo unb" width={100} height={50} layout="responsive"/>
      </Link>

      <div className='flex flex-row gap-x-6 items-center'>
        <Link href="">
          <Image src="/notificacao.png" alt="notificacao" width={16} height={16} layout="responsive"/>
        </Link>
        <div className='flex flex-row gap-x-2 items-center'>
          <Link href={`/user/logado/${user?.id}`} className='mr-4'>
            <Image src="/morty.png" alt="morty" width={16} height={16} layout="responsive" />
          </Link>
          <button onClick={handleLogout} className="mr-4">
            <Image src="/sair.png" alt="sair" width={16} height={16} layout="responsive" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default HeaderLogado;