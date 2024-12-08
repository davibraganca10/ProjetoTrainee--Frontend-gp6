import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//lembrando que esse header é para DESLOGADO

const Header = () => {
  return (
    <header className="bg-verde_unb h-20 flex items-center border border-gray-300 justify-between px-4">
      <Link href="/feed" className="ml-3">
        <Image src="/unb_logo.png" alt="logo unb" width={100} height={50} layout="responsive"/>
      </Link>
      <Link
        href="/entrar/login"
        className="bg-corBotaoLogin font-fontAll text-white text-lg px-6 py-1 mr-7 border-white rounded-xl hover:bg-blue-500 transition-all shadow-md"
      >
        Login
      </Link>
    </header>
  );
};

export default Header;