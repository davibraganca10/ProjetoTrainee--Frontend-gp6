import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';


const HeaderLogado = () => {
  const { logout } = useAuth(); 
  const router = useRouter(); 

  const handleLogout = () => {
    logout(); 
    router.push('/feed');
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
          <Link href={`/user/logado/`} className='mr-4'>
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